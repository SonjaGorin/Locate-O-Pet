const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const petSchema = require("./Pet");

const ownerSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      default: () => "default-username"
    },
    name: {
      type: String,
      required: true,
      default: () => "default-username"
    },
    email: {
      type: String,
      required: true,
      unique: true,
      default: () => "default-username",
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      default: () => "default-username"
    },
    address: {
      type: String,
      unique: true,
      required: true,
      default: () => "default-username"
    },
    phoneNumber: {
      type: String,
      required: true,
      default: () => "default-username"
    },
    petsLost: [petSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ownerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

ownerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

ownerSchema.virtual("petCount").get(function () {
  return this.petsSeen.length;
});

const Owner = model("Owner", ownerSchema);

module.exports = Owner;
