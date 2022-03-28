const express = require("express");
const Word = require("../models/word");
const router = express.Router();

router.post("", async (req, res) => {
  const word = new Word({
    title: req.body.title,
  });
  await word.save();
  res.status(201).send({
    message: "added successfully",
    word: {
      ...word,
      id: word._id,
    },
  });
});

router.patch("/:id", async (req, res) => {
  const word = await Word.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  });
  res.status(200).send({
    word: word,
    message: "Updated successfully",
  });
});

router.get("/:id", async (req, res) => {
  const word = await Word.findById(req.params.id);
  res.status(200).send({
    message: "word fetched successfully",
    word: word,
  });
});

router.get("", async (req, res) => {
  const words = await Word.find();
  const count = await Word.count();
  res.status(200).send({
    message: "words fetched successfully",
    words: words,
    total: count,
  });
});

router.delete("/:id", async (req, res) => {
  const word = await Word.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Word deleted successfully" });
});

module.exports = router;
