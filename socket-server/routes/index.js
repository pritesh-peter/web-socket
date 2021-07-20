const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/pritesh", (req, res) => {
    res.send({ response: "I am Pritesh" }).status(200);
  });

module.exports = router;