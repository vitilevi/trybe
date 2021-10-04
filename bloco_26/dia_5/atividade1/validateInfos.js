const isEmailValid = (email) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email);
}

const isPasswordValid = (pw) => {
  let isPwValid = true;
  pw.split('').forEach((el) => {
    isPwValid = isPwValid && Number.isInteger(Number(el));
  });
  return isPwValid && pw.length > 3 && pw.length <= 8
}

const validateInfos = (req, res, next) => {
  const { username, email, password } = req.body;

  const checkUser = username.length > 3;
  const checkEmail = isEmailValid(email);
  const checkPassword = isPasswordValid(password);

  if (!checkUser || !checkEmail || !checkPassword) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }
  next();
};

module.exports = validateInfos;