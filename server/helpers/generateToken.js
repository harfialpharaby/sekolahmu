const jwt = require("jsonwebtoken");

module.exports = async userData => {
  const { fullname, email } = userData;
  const token = await jwt.sign({ fullname, email }, process.env.SECRET_KEY);
  return token;
};
