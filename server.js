const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001

//define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Serve up static  assets (heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
}

// Add api and view routes
app.use(routes)

//connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI)

//Start API Server
app.listen(PORT, function () {
	console.log(`🌎 ==>API Server now listening on PORT ${PORT}`)
})
