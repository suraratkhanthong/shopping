const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const router = express.Router();

// app.set("view engine", "ejs");

app.use("/public",express.static(path.join(__dirname, "public")))



app.listen(PORT, ()=>{
  console.log(`listen PORT ${PORT}`);
})


app.get("/", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "login.html"));
})

app.get("/login", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "login.html"));
})
app.get("/dashboard", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "dashboard.html"));
})
app.get("/order", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "order.html"));
})
app.get("/appointment", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "appointment.html"));
})
app.get("/daily-sales", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "daily-sales.html"));
})
app.get("/faq", (req,res)=>{
	res.sendFile(path.join(__dirname, "views", "faq.html"));
})



module.exports = app;