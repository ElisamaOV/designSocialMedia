var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

router.get('/', indexController.showHome);

module.exports = router;
