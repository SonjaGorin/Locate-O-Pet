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
},
{
  toJSON: {
    virtuals: true,
  },
});

module.exports = petSchema;
