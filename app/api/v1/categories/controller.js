const Categories = require("./model");

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Categories.create({ name });
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await Categories.find().select("_id name");
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
};
