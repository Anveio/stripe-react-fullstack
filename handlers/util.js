exports.sendJson = (res, status, content) => {
  res.status(status).json(content);
};

exports.getTokenFromHeader = req => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};
