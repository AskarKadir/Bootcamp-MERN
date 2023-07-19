const express = require("express");
const router = express();

router.get("/categories", (req, res) => {
  res.status(200).json({
    message: "halaman categories",
  });
});

router.post("/categories/create", (req, res) => {
  res.status(201).json({
    message: "halaman create categories",
  });
});

router.put("/categories/:id", (req, res) => {
  res.status(200).json({
    message: `halaman update categories id : ${req.params.id}`,
  });
});

router.delete("/categories/:id", (req, res) => {
  res.status(200).json({
    message: `halaman delete categories id : ${req.params.id}`,
  });
});

module.exports = router;
