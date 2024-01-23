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

petSchema.virtual("formattedCreationDate").get(function () {
    const formattedDate = this.createdAt.toLocaleString();
    return formattedDate;
  });

module.exports = petSchema;
