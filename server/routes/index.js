const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/Catalogue', userController.showUser);
router.post(
  '/signup',
  userController.validateSignup,
  catchErrors(userController.createUser)
  // authController.login
);

module.exports = router;
