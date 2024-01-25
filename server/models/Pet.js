const { Schema, model } = require("mongoose");

const User = require('./User')

const petSchema = new Schema(
  {
    species: {
      type: String
    },
    sex: {
      type: String
    },
    breed: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    colours: [
      {
        type: String,
      },
    ],
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true
    },
    lng: {
      type: Number,
      require: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

petSchema.virtual("formattedCreationDate").get(function () {
  const formattedDate = this.createdAt.toLocaleString();
  return formattedDate;
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
