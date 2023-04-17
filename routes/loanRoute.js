//Routes
const express = require('express')
const router = express.Router()
const loanController = require('../controllers/loanController')



router.route('/')
    .get (loanController.getData)
    .post(loanController.createloan)

router.route('/loanUI')
    .get (loanController.getData)
    
    

router.route('/:id')
    .get(loanController.getDataByID)
    .patch(loanController.updateloan)
    .delete(loanController.deleteloan)


loanData = loanController.getData()    

module.exports = router

