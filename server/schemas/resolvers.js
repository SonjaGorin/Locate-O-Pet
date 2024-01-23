const { User, Owner } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user.role === "owner") {
        return Owner.findOne({ _id: context.user._id });
      } else if (context.user.role === "user") {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutations: {},
};

module.exports = resolvers;
