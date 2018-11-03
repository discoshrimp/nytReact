import axios from 'axios'

const api = {

	newSearch: function(data) {
		console.log(`front-end api reached:${data} `)
		return axios.get('/newsearch', data)
	},
	saveArticle: function(data){
		return axios.post('/savearticle', data)
	},
	getArticle: function(){
		return axios.get('/getarticle')
	},
	deleteArticle: function(data) {
		return axios.delete('/delete', data.body.id)
	}
}


export default api