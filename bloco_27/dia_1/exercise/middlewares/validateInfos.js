const feedbackMessage = (message) => ({error: true, message});

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6 || typeof password !== 'string') {
    return res.status(400).json(feedbackMessage("O campo 'password' deve ter pelo menos 6 caracteres"));
  }
  next();
};

const validateFields = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json(feedbackMessage('Todos os campos são obrigatórios!'));
  }
  next();
}

module.exports = {
  validatePassword,
  validateFields
}; 