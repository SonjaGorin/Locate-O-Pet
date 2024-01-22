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
  colours: [
    {
    type: String,
  }
]
});

module.exports = petSchema;
