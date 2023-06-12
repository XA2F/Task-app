const router = require("express").Router();
const Task = require("../models/Task1");

// routes will be here....
router.get("/", async (req, res) => {
  const allTodo = await Task.find();
  res.render("index", { todo: allTodo });
});

module.exports = router;
