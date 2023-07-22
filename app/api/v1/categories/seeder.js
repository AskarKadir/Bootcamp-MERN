const Categories = require("./model");
const mongoose = require("mongoose");
const db = require("../../../db");
const casual = require("casual");

async function seedData(totalData) {
  try {
    console.log(typeof totalData);
    if (totalData == 0) {
      throw new Error("Parameter total data is required");
    } else if (typeof totalData != "number") {
      throw new Error("Type of total data must be Number");
    }
    await db;
    await Categories.deleteMany();
    console.log("Delete complete");
    console.log(totalData);
    const dataSeed = [];
    for (let index = 0; index < totalData; index++) {
      const name = casual.words(2);

      dataSeed.push({ name });
    }
    await Categories.insertMany(dataSeed);
    console.log("Data seeding complete");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
}

module.exports = seedData;
