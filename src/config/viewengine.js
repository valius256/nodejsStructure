const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  // config template engine
  // path.join lấy thư mục đang đứng tức config D:\semester5\swp391\expressJs\bai2\src\config\views\
  // ./ back ra src
  console.log("check dir name:", path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  // config static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
