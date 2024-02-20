const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.JAWSDB_URL);

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASWWORD,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     port: 3306,
//   }
// );

module.exports = sequelize;
