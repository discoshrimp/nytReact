const db = require('../Models/Article')
const request = require('request')

module.exports = {
	newSearch: (req, res) => {
		console.log(`back-end api reached:${req}`)
		const authKey = "462a94997e72401b92d8f11524378eba";
		const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +authKey +"&q=Weightloss";
		request.get(queryURL, (error, response, data) => {
			console.log(JSON.parse(data))
			res.send(data)
		});
	},
	getArticle:(req, res)=>{
		db.find()
		.then(response =>{
			console.log(response)
			res.send()
		})
		.catch(err =>{
			console.log(`unable to get article: ${err}`)
		})
	},
	delete: (req, res) => {

		db.findOne({ _id: req.params })
			.then(data => {
				console.log(`delete response: ${data}`)
				res.send(JSON.parse(data))
			})
			.catch(err => {
				console.log(`delete error:${err}`)
			})
	},
	saveArticle: (req, res)=>{
		db.create(req.body)
		.then(data=>{
			console.log(`article saved: ${data}`)
		})
		.catch(err=>{
			console.log(`unable to save: ${err}`)
		})
	}
}