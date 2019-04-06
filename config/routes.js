const axios = require("axios");
const bcrypt = require("bcryptjs");

const { authenticate } = require("../auth/authenticate");
const { genToken } = require("../auth/tokenService");
const userModel = require("../database/users-model");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

function register(req, res) {
  //get credentials from body
  let user = req.body;
  // hash the password
  const hash = bcrypt.hashSync(user.password, 10);
  //replace the password with the hash
  user.password = hash;

  //add the user to the database
  userModel
    .add(user)
    .then(u => {
      res.status(201).json(u);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function login(req, res) {
  //get the username and password off the body
  let { username, password } = req.body;

  //find the user by the username
  userModel
    .findBy({ username })
    .then(user => {
      // console.log(user);
      // console.log(bcrypt.compareSync(password, user.password));
      //compare the hash in the database with a hash of the password supplied
      if (user && bcrypt.compareSync(password, user.password)) {
        //generate a token based off of the user
        const token = genToken(user);
        res.status(200).json({ message: `welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
