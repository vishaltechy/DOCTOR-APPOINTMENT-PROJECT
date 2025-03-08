const express = require ("express");
const route = express.Router();
const doctorController= require("../Controllers/doctorController");


route.post("/registration",doctorController.doctorRegistration);
route.get("/homedoctorsdisplay",doctorController.doctorHomeDisplay);











module.exports = route;