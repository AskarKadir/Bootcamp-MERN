const Categories = require("./model");
const mongoose = require("mongoose");
const db = require("../../../db");
const casual = require("casual");

const totalData = 10;
async function seedData() {
  try {
    await db;
    await Categories.deleteMany();
    console.log("Delete complete");
    const dataSeed = [];
    for (let index = 0; index < totalData; index++) {
      const name = casual.words(2);

      dataSeed.push({ name });
    }
    await Categories.insertMany(dataSeed);
    console.log("Data seeding complete");
  } catch (error) {
    console.error("Error : ", error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
