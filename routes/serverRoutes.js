const express = require('express')
const router = express.Router()
const request = require ('request')
const controller = require('./controllers')

router.post('/savearticle', controller.saveArticle)

router.get('/newsearch', controller.newSearch)

router.delete('/delete/:id', controller.delete)

router.get('/getarticle', controller.getArticle)

module.exports = router