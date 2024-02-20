const router = require("express").Router();
const Review = require("../../models/Review");
const auth = require("./../../utils/auth");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviewData = await Review.findAll();
    if (!reviewData) {
      res.status(404).json({ message: "Cannot find reviews." });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET specific review
router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id);
    if (!reviewData) {
      res.status(404).json({ message: "Cannot find review." });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new review
router.post("/", auth, async (req, res) => {
  try {
    const reviewData = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
