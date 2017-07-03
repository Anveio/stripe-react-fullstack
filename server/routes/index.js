const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post(
  '/signup',
  userController.validateSignup,
  catchErrors(userController.createUser),
  authController.login
);

router.get('/users', 
  // authController.isLoggedIn, 
  userController.showUsers
);

router.post('/login', authController.login);

module.exports = router;
