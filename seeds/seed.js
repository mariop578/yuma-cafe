const sequelize = require("../config/connection");
const { User, Review, Request, Menu } = require("../models");
const userData = require("./userData.json");
const reviewData = require("./reviewData.json");
const requestData = require("./requestData.json");
// const menuData = require("./menuData.json");

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

  const requests = await Request.bulkCreate(requestData, {
    individualHooks: true,
    returning: true,
  });

  // const menu = await Menu.bulkCreate(menuData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  process.exit(0);
};
// Run in terminal to seed database
// node ./seeds/seed.js
seedDatabase();
