const factory = require('./factory');

exports.home = factory.page('pages/home', {
  title: 'Express Yourself Unhindered! | Thoughts',
});

exports.about = factory.page('pages/about', {
  title: 'About Thoughts',
});

exports.dashboard = factory.page('dashboard/home', {
  title: 'Dashboard | Thoughts',
});

exports.settings = factory.page('dashboard/settings', {
  title: 'Settings | Thoughts',
});
