const GoogleStrategy = require('passport-google-oauth20').Strategy;

exports.login = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.logout = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.signup = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
