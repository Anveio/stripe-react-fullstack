const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const stripeController = require('../controllers/stripeController');

router.post(
  '/signup',
  userController.validateSignup,
  catchErrors(userController.createUser),
  authController.login
);

router.post('/stripe', stripeController.processPayment);

router.post('/auth/jwt', authController.emailFromJwt);

router.post('/login', authController.login);

module.exports = router;
