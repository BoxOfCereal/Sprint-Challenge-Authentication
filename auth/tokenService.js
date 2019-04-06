const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

const genToken = user => {
  console.log(user);
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtKey, options);
};

module.exports = {
  genToken
};
