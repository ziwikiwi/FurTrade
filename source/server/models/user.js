// Load required packages
var mongoose = require('mongoose');
var Ears = require('ear.js');

// Define our user schema
/*
trade: ears for trade
*/
var UserSchema = new mongoose.Schema({
    name: String,
    trade: [Ears],
    sell: [Ears],
    iso: [{type: Ears, match: String}]

});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
