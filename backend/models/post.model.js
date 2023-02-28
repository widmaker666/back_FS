const mongoose = require("mongoose");

//!Le model ce créer ici et c'est construit comme un objet Javascript
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//-On export toujours comme ça le model
module.exports = mongoose.model("Post", postSchema);