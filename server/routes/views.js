const router = require('express').Router();
const { home, about, dashboard, settings } = require('../controllers/page');

/**
 * @method GET /
 * @route  '/'
 */
router.route('/').get(home);

/**
 * @method GET /
 * @route  /about
 */
router.route('/about').get(about);

/**
 * @method GET /
 * @routes  /dashboard, /settings
 */
router.route('/dashboard').get(dashboard);
router.route('/settings').get(settings);

module.exports = router;
