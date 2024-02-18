const router = require("express").Router();
const userRoutes = require("./userR");
const reviewRoutes = require("./reviewR");

router.use("/user", userRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
