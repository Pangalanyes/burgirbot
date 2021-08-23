"use strict";

var express = require("express");

var server = express();
server.all("/", function (req, res) {
  res.send("Bot is running!");
});

function keepAlive() {
  server.listen(3000, function () {
    console.log("Server is ready");
  });
}

module.exports = keepAlive;