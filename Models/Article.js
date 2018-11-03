
const mongoose = require('mongoose')

//save a ref to schema constructor

const Schema = mongoose.Schema
//constructs a new schema for articles pulled from website

const ArticleSchema = new Schema({
	title: {type: String },

	link: {type: String},

	date:{ type: Date, default: Date.now},
	
	saved:{type: Boolean, default: false}
})

//create a model from the schema
var Article = mongoose.model('Article', ArticleSchema)

//export Article model

module.exports = Article