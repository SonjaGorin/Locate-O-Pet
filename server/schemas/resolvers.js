const { User, Owner, Pet } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  UserOrOwner: {
    __resolveType(obj, contextValue, info) {
      if (obj.role === "User") {
        return "User";
      }
      if (obj.role === "Owner") {
        return "Owner";
      }
      return null;
    },
  },

  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "Owner") {
        return Owner.findOne({ _id: context.user._id });
      } else {
        return User.findOne({ _id: context.user._id });
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password, role, phoneNumber }) => {
      if (role === "User") {
        const user = await User.create({
          name,
          email,
          password,
          role,
          phoneNumber,
        });
        console.log(user);
        const token = signToken(user);
        return { token, user };
      } else {
        const user = await Owner.create({
          name,
          email,
          password,
          role,
          phoneNumber,
        });
        console.log(user);
        const token = signToken(user);
        return { token, user };
      }
    },

    login: async (parent, { email, password, role }) => {
      if (role === "User") {
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
      } else {
        const user = await Owner.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user };
      }
    },

    addPet: async (parent, { input }, context) => {
      const { species, sex, breed, colours, message, lng, lat } = input;

      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "User") {
        const petCreated = await Pet.create({
          species,
          sex,
          breed,
          colours,
          message,
          lng,
          lat,
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
        return { petCreated };
      } else {
        const petCreated = await Pet.create({
          species,
          sex,
          breed,
          colours,
          message,
          lng,
          lat,
        });

        const petAdded = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { petsSeen: petCreated },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return { petCreated };
      }
    },

    addLostPet: async (parent, { input }, context) => {
      const { species, sex, breed, colours, message, lng, lat } = input;

      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "Owner") {
        const petCreated = await Pet.create({
          species,
          sex,
          breed,
          colours,
          message,
          lng,
          lat,
        });

        const petAdded = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { petsLost: petCreated },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return { petCreated };
      }
    },

    removePet: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "User") {
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
        const petRemoved = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { petsSeen: _id } },
          { new: true }
        );
        const petDeleted = await Pet.findOneAndDelete({
          _id: _id,
        });

        return petDeleted;
      }
    },

    removeLostPet: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "Owner") {
        const petRemoved = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { petsSeen: _id } },
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
