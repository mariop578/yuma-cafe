const router = require("express").Router();
const Request = require("../../models/Request");
const auth = require("../../utils/auth");

// get all requests
router.get("/", async (req, res) => {
  try {
    const requestData = await Request.findAll();
    if (!requestData) {
      res.status(404).json({ message: "Cannot find menu requests" });
      return;
    }
    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET menu request by id
router.get("/:id", async (req, res) => {
  try {
    const requestData = await Request.findByPk(req.params.id);
    if (!requestData) {
      res
        .status(404)
        .json({ message: "Cannot find menu request with this id." });
      return;
    }
    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a menu request
// If user is not logged they get redirected to log in
router.post("/", auth, async (req, res) => {
  try {
    const requestData = await Request.create(req.body);
    if (!requestData) {
      res.status(404).json({ message: "Could not Create new menu request." });
      return;
    }
    res.status(200).json(requestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
