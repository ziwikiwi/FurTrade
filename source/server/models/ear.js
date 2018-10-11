// Load required packages
var mongoose = require('mongoose');

// Define our ear schema
/*
_id: Generated ear ID for this ear. In the form of {shop}_{release}_{number}.
store: Original ear maker: AC, Hoshii, AKC, ALL, FD, etc
color: Color of the ears, or custom design, such as Hoshii's DVA ears, or themed 
	outer: outer ear color
	inner: lining color (usually pink)
	custom: custom design
type: Type of ear (pine marten, bunny, fox, wolf, cat, etc)
release: YMD form of the date of the release. In the form "YYYY-MM-DD".
copies: Copies of this item released. Default is 1.
*/
var EarSchema = new mongoose.Schema({
	_id: String,
    store: String,
    colors: {
    	outer: String,
    	inner: String,
    	custom: {
    		type: String,
    		default: null
    	}
    },
    type: String,
   	release: String,
   	copies: {
   		type: Number,
   		default: 1
   	}
});

// Export the Mongoose model
module.exports = mongoose.model('Ears', EarSchema);
