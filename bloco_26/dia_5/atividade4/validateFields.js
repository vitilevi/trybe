const validateName = (name) => {
  return name.length > 5
};

const validateInitials = (initials) => {
  return initials.length <= 3;
};

const validateCountry = (country) => {
  return country.length > 3;
};

const validate = (req, res, next) => {
  const { name, initials, country } = req.body;
  const checkName = validateName(name);
  const checkInitials = validateInitials(initials);
  const checkCountry = validateCountry(country);

  if (!checkName || !checkInitials || !checkCountry) {
    return res.status(400).json({ message: "invalid data" }) 
  }

  next();
};

module.exports = validate;