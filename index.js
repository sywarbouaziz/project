const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes =require("./routes/authRoute");


const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose
  .connect('mongodb+srv://admin:javascript123@cluster0.8oa5a.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(authRoutes);