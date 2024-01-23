const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const petSchema = require("./Pet");

const ownerSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{3}-\d{3}-\d{4}$/, "Please enter a valid phone number"],
    },
    role: {
    type: String,
    required: true
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
