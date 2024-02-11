const { home, about, dashboard, settings } = require('../controllers/page');

const router = require('express').Router();

/**
 * @method GET /
 * @route  '/'
 */
router.route('/').get(home);

/**
 * @method GET /
 * @route  '/about'
 */
router.route('/about').get(about);

/**
 * @method GET /
 * @route  '/dashboard'
 */
router.route('/dashboard').get(dashboard);
router.route('/settings').get(settings);

module.exports = router;
