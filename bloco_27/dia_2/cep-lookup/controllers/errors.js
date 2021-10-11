module.exports = (err, _req, res, _next) => {
  const statusObject = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  const errorCode = statusObject[err.error.code] || 500;
  const errorMessage = err.error ? err : {message: 'Internal error!'};
  res.status(errorCode).json(errorMessage);
};