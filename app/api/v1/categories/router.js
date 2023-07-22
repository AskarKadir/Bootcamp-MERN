const express = require("express");
const router = express();
const { create, index } = require("./controller");

router.get("/categories", index);

router.post("/categories/create", create);

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
