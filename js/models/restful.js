
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var listSchema = new mongoose.Schema({
	category: String,
	itemName: String,
	status: String
});

// Return model
module.exports = restful.model('List', listSchema);