// Load required packages
var mongoose = require('mongoose');
var Ears = require('ear.js');

// Define our user schema
/*
store: store having the release
trade: ears for trade
date: release date
*/
var ReleaseSchema = new mongoose.Schema({
    store: String,
    trade: [Ears],
    date: String
});

// Export the Mongoose model
module.exports = mongoose.model('Release', ReleaseSchema);