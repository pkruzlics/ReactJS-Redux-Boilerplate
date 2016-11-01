var settings = require('./settings');

function bind(app) {

  app.get('/api/settings', ensureAuthenticated, settings.getSettings);
}

function ensureAuthenticated(req, res, next) {
  // Handle checking authentication here

  return next();
}

module.exports = {
  bind: bind,
};
