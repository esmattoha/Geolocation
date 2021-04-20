// Import Dependencies
const Location = require("../models/location");


// Fetch all location
exports.getLoc = async (req, res, next) => {
  try {
    const stores = await Location.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


// Store Location
exports.postLoc = (req, res, next) => {
  const title = req.body.title;
  const address = req.body.address;

  Location.find({ title: title, address: address })
    .then((match) => {
      if (match.length >= 1) {
        return res.status(406).json({ message: "Already Exists!" });
      } else {
        const loc = new Location({
          title: title,
          address: address,
        });
        loc.save().then((p) => {
          res.status(201).json({ loc: p });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error!" });
    });
};

//  Find near Locations
exports.findLoc = (req, res, next) => {
const log = req.body.log;
const lat = req.body.lat; 

  Location.aggregate()
    .near({
      near: { 
        'type': 'Point', 
        'coordinates': [log, lat] 
      },
      maxDistance: 10000000, 
      spherical: true, 
      distanceField: "dis"
    })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log(err);
    });
};
