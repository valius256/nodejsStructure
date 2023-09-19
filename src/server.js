// de kill port thi dung npx kill-port 3000
require("dotenv").config();
const express = require("express");
const path = require("path");
const { env } = require("process");
const configViewEngine = require("./config/viewengine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.Port || 8888; // port = 3000 => dang hardcode , const port = process.env.Port || 8888 truy cap value port thong qua .env, neu bi trung thi dung 8888
const hostname = process.env.Host_Name;

// config template engine
configViewEngine(app);

// khai báo router
// truy cap binh thuong http://localhost:8080/phat
// app.use("/", webRoutes);
// neu http://localhost:8080/phat thì lỗi do tiền tố /test phải có ngay sau localhost
// http://localhost:8080/v1/phat
app.use("/v1", webRoutes);

app.listen(port, hostname, () => {
  console.log("App is running at port :", port);
});
