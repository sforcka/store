const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/', checkRole('Admin'), deviceController.create)
router.get('/',deviceController.getALL)
router.get('/:id', deviceController.getOne)



module.exports = router