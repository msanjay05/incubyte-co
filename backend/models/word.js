const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Word = mongoose.model("Post", wordSchema);
module.exports = Word;
