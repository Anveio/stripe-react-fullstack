module.exports = sendJson = (res, status, content) => {
  res.status(status).json(content);
};
