const express = require("express");
const router = express();

router.get("/talents", (req, res) => {
  res.status(200).json({
    message: "halaman index talents",
  });
});

router.post("/talents/create", (req, res) => {
  res.status(201).json({
    message: "halaman create talents",
  });
});

router.put("/talents/:id", (req, res) => {
  res.status(200).json({
    message: `halaman update talents ${req.params.id}`,
  });
});

router.delete("/talents/:id", (req, res) => {
  res.status(200).json({
    message: `halaman delete talents ${req.params.id}`,
  });
});

module.exports = router;
