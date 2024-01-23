const { User, Owner } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  
    UserOrOwner: {
        __resolveType(obj, contextValue, info){
          if(obj.role === "User"){
            return 'User';
          }
          if(obj.role === "Owner"){
            return 'Owner';
          }
          return null; 
        },},

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
      owners: async () => {
      return await Owner.find({}).populate('petsLost')
    },
    users: async () => {
      return await User.find({}).populate('petsSeen')
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { userName, name, email, password, role, phoneNumber }
    ) => {
      if (role === "User") {
        const user = await User.create({
          userName,
          name,
          email,
          password,
          role,
          phoneNumber,
        });
        console.log(user)
        const token = signToken(user);
        return { token, user };
      } else {
        const user = await Owner.create({
          userName,
          name,
          email,
          password,
          role,
          phoneNumber,
        });
        console.log(user)
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
      const { species, sex, breed, colours } = input;

      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "User") {
        const petAdded = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { petsSeen: { species, sex, breed, colours } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return petAdded;
      } else {
        const petAdded = await Owner.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { petsLost: { species, sex, breed, colours } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return petAdded;
      }
    },

    removePet: async (parent, { _id }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      if (context.user.role === "User") {
        const petRemoved = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { petsSeen: { _id } } },
          { new: true }
        );
        return petRemoved;
      } else {
        const petRemoved = await Owner.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { petsLost: { _id } } },
            { new: true }
          );
          return petRemoved;
      }
    },
  },
};

module.exports = resolvers;
