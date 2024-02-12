const router = require('express').Router();
const { login, logout, signup } = require('../controllers/authy');

/**
 * @method GET /
 * @route  /signup
 */
router.route('/signup').get(signup);

/**
 * @method GET /
 * @route  /login
 */
router.route('/login').get(login);

/**
 * @method GET /
 * @route  /logout
 */
router.route('/logout').get(logout);

module.exports = router;
