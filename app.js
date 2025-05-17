const express = require("express");
const taskRoutes = require("./Routes/taskRoute");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});

async function db() {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://arth:arth@cluster0.8d34f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(res.default.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}
db()
