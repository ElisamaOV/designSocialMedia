var express = require('express');
var router = express.Router();
const designerController = require('../controllers/designerController');
const uploadFile = require('../middleware/uploadFile');

router.get('/createDesigner', designerController.showCreateDesignerForm);
router.post(
  '/createDesigner',
  uploadFile('designers'),
  designerController.createDesigner
);
router.get('/showDesigner/:id', designerController.showDesigner);
router.get('/showDesignerf/:id', designerController.showDesignerf);
router.get('/login', designerController.showLogin);
router.post('/login', designerController.login);

module.exports = router;
