const { Signup, Login } = require('../Controllers/AuthController');
const router = require('express').Router();
const { userVerification } = require('../Middlewares/AuthMiddleware'); // Keep using require

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification);

module.exports = router;
