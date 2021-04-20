/*
* Title : GRO LOCATION 
* Description : Find some location from a coordinate point
* Author : Dipu Mondal
* Date : 12.04.2021
*/

// Import Dependencies
const express = require('express');
const mongoose = require('mongoose');
const env = require("dotenv");
const path = require('path');


//Reseters .env by default
env.config();

// Import Routes
const locRouter = require("./routes/location");

// Connect with MongoDB Server 
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/geoloc", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      console.log("You are successfully connect with MongoDb Database");
    } catch (error) {
      console.log("App starting error: ", error.stack);
      process.exit(1);
    }
  };
// Calling function connectDB
connectDB();
  
// Define Express function as a app object
const app = express();

// JSON poperty Define
// JSON Inbuilt Middleware
app.use(express.json());

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

//Public Routes
app.use(locRouter);

// Port Define
const PORT = process.env.PORT || 3000 ;

// Port Listening
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});