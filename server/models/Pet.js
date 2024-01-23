const { Schema } = require("mongoose");

const petSchema = new Schema({
  species: {
    type: String,
  },
  sex: {
    type: String,
  },
  breed: {
    type: String,
    required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now(),
    },
  colours: [
    {
    type: String,
  }
]
},
 {
    toJSON: {
      virtuals: true,
    },
  });

module.exports = petSchema;
