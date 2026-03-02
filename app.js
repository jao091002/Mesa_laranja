const express = require("express");
const app = express();


app.get("/verstappen", (req, res, next) => {
    return res.status(200).sendFile("verstappen.html", {root: './'});
});
app.get("/schumacher", (req, res, next) => {
  return res.status(200).sendFile("schumacher.html", {root: './'});
});
app.get("/nico", (req, res, next) => {
  return res.status(200).sendFile("nico.html", {root: './'});
});



module.exports = app;
app.use((req, res, next)=> {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});