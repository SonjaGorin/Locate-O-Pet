const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const Pet = require("./Pet");

const userSchema = new Schema(
  {
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
    petsSeen: [{
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }],
    petsLost: [{
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("petCount").get(function () {
  return this.petsSeen.length;
});

const User = model("User", userSchema);

module.exports = User;
