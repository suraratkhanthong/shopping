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
	res.redirect("/login")
})

app.get("/login", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/login.html");
})
app.get("/dashboard", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/dashboard.html");
})
app.get("/order", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/order.html");
})
app.get("/appointment", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/appointment.html");
})
app.get("/daily-sales", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/daily-sales.html");
})

app.get("/faq", (req,res)=>{
	res.sendFile(__dirname+"/public/src/temp/faq.html");
})



module.exports = app;