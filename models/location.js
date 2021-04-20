// Import Dependencies
const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

// Schema Define 
const Schema = mongoose.Schema;

// Creating a New Schema for Location
const locSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String, 
      enum: ["Point"],
    },
    coordinates: {
      type: [Number]
    },
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// Index Define in Location of Schema
locSchema.index({ location: "2dsphere" });

// GEOCODER & CREATE LOCATION
locSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address); // Geocode is a Methode

  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  // Do Not save address
  this.address = undefined;
  next();
});

// Export Schema 
module.exports = mongoose.model("Location", locSchema);
