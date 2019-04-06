const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

const genToken = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ["TA", "PM"] //in reality from db
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = {
  genToken
};
