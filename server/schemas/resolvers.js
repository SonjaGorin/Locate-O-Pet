const { User, Pet } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = User.findOne({ _id: context.user._id });
      return user;
    },

    petById: async (parent, { _id }, context) => {
      const yes = await Pet.findOne({ _id }).populate("user").populate("owner");
      return yes;
    },

    allPets: async (parent, args, context) => {
      const pets = await Pet.find().populate("user");
      return pets;
    },

    userEmail: async (parent, { email }, context) => {
      try {
        const user = await User.findOne({ email });
        return user !== null
      } catch (error) {
        console.error("Error while checking duplicate email:", error);
        throw error;
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      try {
        const isDuplicateEmail = await User.findOne({ email });

        if (isDuplicateEmail) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        }

        console.log({
          name,
          email,
          password
        });
        const user = await User.create({
          name,
          email,
          password
        });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        // throw new Error("An error occurred during user creation.");
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addSeenPet: async (parent, { input }, context) => {
      const { species, sex, breed, colours, message, status, img, lng, lat } =
        input;

      if (!context.user) {
        throw AuthenticationError;
      }

      const petCreated = await Pet.create({
        species,
        sex,
        breed,
        colours,
        message,
        status,
        img,
        lng,
        lat,
        user: context.user._id,
      });

      const petAdded = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: { petsSeen: petCreated },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return petCreated;
    },

    addLostPet: async (parent, { input }, context) => {
      const { species, sex, breed, colours, message, status, img, lng, lat } =
        input;

      if (!context.user) {
        throw AuthenticationError;
      }

      const petCreated = await Pet.create({
        species,
        sex,
        breed,
        colours,
        message,
        status,
        img,
        lng,
        lat,
        user: context.user._id,
      });

      const petAdded = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: { petsLost: petCreated },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return petCreated;
    },

    removePet: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findOne({ _id: context.user._id });

      if (user.petsSeen.includes(_id)) {
        const petRemoved = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { petsSeen: _id } },
          { new: true }
        );
        const petDeleted = await Pet.findOneAndDelete({
          _id: _id,
        });

        return petDeleted;
      } else {
        const petRemoved = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { petsLost: _id } },
          { new: true }
        );
        const petDeleted = await Pet.findOneAndDelete({
          _id: _id,
        });

        return petDeleted;
      }
    },
  },
};

module.exports = resolvers;
