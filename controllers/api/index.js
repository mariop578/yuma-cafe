const router = require("express").Router();

const userRoutes = require("./userR");
const reviewRoutes = require("./reviewR");
const requestsRoutes = require("./requestsR");

router.use("/user", userRoutes);
router.use("/reviews", reviewRoutes);
router.use("/requests", requestsRoutes);

module.exports = router;
