import express from "express";
import configViewEngine from "./config/viewEngine"



let app = express();
var hostname = "localhost";
var port = 8013;

configViewEngine(app);

app.get("/capnhat.html", (req, res) => {
  return res.render("capnhat");
})

app.get("/dangtin.html", (req, res) => {
  return res.render("dangtin");
})

app.get("/huongdan.html", (req, res) => {
  return res.render("huongdan");
})

app.get("/index.html", (req, res) => {
  return res.render("index");
})

app.get("/loginRegister.html", (req, res) => {
  return res.render("loginRegister");
})

app.get("/trangchu.html", (req, res) => {
  return res.render("trangchu");
})

app.get("/lichsudangtin.html", (req, res) => {
  return res.render("lichsudangtin");
})


 app.listen(port, hostname, () => {
   console.log("Bây giờ chạy http://localhost/8013/một file ejs bất kỳ .html")
 });