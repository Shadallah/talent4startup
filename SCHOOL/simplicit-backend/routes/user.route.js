const express = require('express')
const router = express.Router()

const {signup, signin} = require('../controllers/user.controller.route.js')

router.post('/register', signup)
router.post('/login', signin)

// this can also work for this to work, middleware on index.js each route should be referenced (app.use('/api/school/register', UserRouter) e.t.c)

// router.post('/', signup)
// router.post('/', signin)


module.exports = router;
