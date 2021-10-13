module.exports = (err, _req, res, _next) => {
  const statusObject = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusObject[err.code] || 500;
  // const errorMessage = err.message ? err : {message: 'Internal error!'};
  res.status(status).json({ error: { message: err.message } });
};