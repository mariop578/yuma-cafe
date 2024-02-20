const router = require("express").Router();

const userRoutes = require("./userR");

router.use("/", userRoutes);

module.exports = router;
