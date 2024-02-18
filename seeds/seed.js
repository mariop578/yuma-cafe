const sequelize = require("../config/connection");
const { User, Review } = require("../models");
const userData = require("./userData.json");
const reviewData = require("./reviewData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const reviews = await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
// Run in terminal to seed database
// node ./seeds/seed.js
seedDatabase();
