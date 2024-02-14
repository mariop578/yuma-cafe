const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("we good");
});

router.get("/login", async (req, res) => {
  //res.send("Login Page for users");
  res.render("login");
  // Login
});

router.get("/signup", async (req, res) => {
  //res.send("Signup Page for users");
  res.render("signup");
  // Signup
});

module.exports = router;
