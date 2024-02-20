const User = require("./User");
const Review = require("./Review");
const Request = require("./Request");
// const Menu = require("./Menu");

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Review.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Request, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Request.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Review, Request };
