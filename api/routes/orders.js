const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Oreders were fetched",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Oreders were created",
  });
});
router.get("/:oderId", (req, res, next) => {
  res.status(200).json({
    message: "Oreder details",
    oderId : req.params.oderId
  });
});
router.delete("/:oderId", (req, res, next) => {
  res.status(200).json({
    message: "Oreder deleted",
    oderId : req.params.oderId
  });
});

module.exports = router;
