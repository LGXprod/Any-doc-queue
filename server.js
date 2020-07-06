const express = require("express");
const ejs = require("ejs");

const loginController = require("./controller/loginController");

const doc_app = express();

doc_app.set("view engine", "ejs");
doc_app.use(express.static("./public"));

doc_app.listen(3000, () => console.log("Server running on port 3000"));

loginController.showLoginPage(doc_app);