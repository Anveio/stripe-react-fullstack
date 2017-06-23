// Wrapper for async functions so we don't have to try/catch every time.
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
