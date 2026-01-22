const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE_PATH = "./users.txt";

/* ---------- Helper Functions ---------- */                                                                                                                                        
const readUsers = () => {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
};

const writeUsers = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

/* ---------- Basic Route ---------- */
app.get("/", (req, res) => {
  res.send("User API Running with JSON TXT File");
});

/* ---------- GET ALL USERS ---------- */
app.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

/* ---------- GET USER BY ID ---------- */
app.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

/* ---------- ADD USER ---------- */
app.post("/users", (req, res) => {
  const users = readUsers();
  const { id, name, age, city } = req.body;

  if (!id || !name || !age || !city) {
    return res.status(400).json({ message: "All fields required" });
  }

  users.push({ id, name, age, city });
  writeUsers(users);

  res.json({ message: "User added successfully" });
});

/* ---------- UPDATE USER ---------- */
app.put("/users/:id", (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    ...users[index],
    ...req.body
  };

  writeUsers(users);
  res.json({ message: "User updated successfully" });
});

/* ---------- DELETE USER ---------- */
app.delete("/users/:id", (req, res) => {
  let users = readUsers();
  const newUsers = users.filter(u => u.id != req.params.id);

  if (users.length === newUsers.length) {
    return res.status(404).json({ message: "User not found" });
  }

  writeUsers(newUsers);
  res.json({ message: "User deleted successfully" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});