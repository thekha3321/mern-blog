import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ports from "./routers/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;
const URI =
  "mongodb+srv://admin:60X2gWDiOXj13RFT@cluster0.gmnz88r.mongodb.net/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("success!");
});
app.use("/posts", ports);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
