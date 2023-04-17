const express = require("express");
const app = express();
const port = 3001;

const USERS = [];

const QUESTIONS = [
  {
    title: "Two states",
    description: "Given an array, return the max of the array",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const SUBMISSIONS = [];

app.post("/signup", (req, res) => {
  // check if user with email already exists
  const existingUser = USERS.find((user) => user.email === email);

  if (existingUser) {
    res.status(400).send("User with email already exists"); // return 400 error if user already exists
  } else {
    USERS.push({ email, password }); // add new user to the users array
    res.status(200).send("User created successfully"); // return 200 status code if user was created successfully
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body; // decode body to get email and password fields

  // check if the user with email already exists in the USERS array
  const user = USERS.find((user) => user.email === email);

  // If user does not exist or passowrd is incorrect
  if (!user || user.password !== password) {
    res.status(401).send("Invalid email or password");
  } else {
    // If password is correct, create a token and send it to client along with a 200 status code
    const token = "randomString123"; // generate random token
    res.status(200).json({ token }); // send token as JSON response;
  }
});

app.get("/questions", (req, res) => {
  const Questions = QUESTIONS;
  res.json(userQuestions);
});

app.get("/submissions", (req, res) => {
  // return the users submission for this problem
  res.send("Hello World from route2!");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem , randomly accept or reject the the solution
  // store the submission in the submission array above.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
