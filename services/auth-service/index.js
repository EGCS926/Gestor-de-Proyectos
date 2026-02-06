import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

// Modelo
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "user" }
});
const User = mongoose.model("User", UserSchema);

// Registro
app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    username: req.body.username,
    password: hash
  });
  res.status(201).json(user);
});

// Login
app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.sendStatus(401);

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.sendStatus(401);

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

app.listen(4000, () =>
  console.log("Auth Service running on port 4000")
);