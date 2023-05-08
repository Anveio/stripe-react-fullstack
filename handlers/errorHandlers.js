const { sendJson } = require('./util');

// Wrapper for async functions so we don't have to try/catch every time.
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.displayAuthenticationError = (err, req, res, next) => {
  if (!err.name && !err.message) return next(err);
  console.log(err);
  sendJson(res, 400, err.message);
};

exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status
  };
  console.log(errorDetails);
  next();
};

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
};
