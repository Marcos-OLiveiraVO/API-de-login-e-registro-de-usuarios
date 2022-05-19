require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./Routers/userRouter");
const adminRouter = require("./Routers/adminRouter");

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then((db) => console.log(`Database connected`))
  .catch((err) => console.log(`An error ocorried ${err}`));

app.listen(process.env.PORT, () => console.log(`Server is Running...`));
