const router =require('express').Router()
const routes = require('./serverRoutes')

router.use(routes)

module.exports = router