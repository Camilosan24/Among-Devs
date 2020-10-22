const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerApp');

router.get('/',controller.inicio);
router.get('/game',controller.game);
router.get('/contact',controller.contact)



module.exports = router;