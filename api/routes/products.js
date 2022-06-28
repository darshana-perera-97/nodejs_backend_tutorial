const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the GET request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the POST request",
  });
});

router.post("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "fousnd special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "cant find special ID",
    });
  }
});

module.exports = router;
