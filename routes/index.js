const router = require("express").Router();
const Task = require("../models/Task1");

// routes
router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Task({ todo });

    // save the task
    newTodo
      .save()
      .then(() => {
        console.log("New task added!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Task removed");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
