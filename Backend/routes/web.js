const express = require('express')
const UserController = require('../controller/UserController');
const TenderController = require('../controller/TenderController');
const router = express.Router()

router.get('/getalluser',UserController.getalluser)

router.post("/Tender_insert", TenderController.Tender_insert);
router.get("/getTender", TenderController.getTender);
router.get("/getTenderById/:id", TenderController.getTenderById);
router.delete("/deleteTender/:id", TenderController.deleteTender);
router.post("/updateTender/:id", TenderController.updateTender);




module.exports = router