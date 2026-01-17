const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {
  const { title, dueDate } = req.body;

  if (!title || !dueDate) {
    return res.status(400).json({ error: "Title and dueDate are required" });
  }

  const todo = {
    id: todos.length + 1,
    title,
    status: "pending",
    dueDate
  };

  todos.push(todo);
  res.status(201).json(todo);
});

app.get("/todos", (req, res) => {
  let result = todos;

  if (req.query.status) {
    result = result.filter(todo => todo.status === req.query.status);
  }

  res.json(result);
});

app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (req.body.title) todo.title = req.body.title;
  if (req.body.status) todo.status = req.body.status;
  if (req.body.dueDate) todo.dueDate = req.body.dueDate;

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

app.listen(3000, () => console.log("Todo API running on port 3000"));
