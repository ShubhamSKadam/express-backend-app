const express = require("express");
const app = express();
const port = 3001;

app.post("/signup", (req, res) => {
  // Add logic to decode body
  // body should have email and password

  // store email and password ( as is for me ) is the USERS array above ( only if the user with the given email doesn't exist).

  // return 200 status code to the client

  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure the password is the same

  // If the password is the same, retuurn back the 200 status to the client
  // Also send back the token ( any random string will do for now)
  // If the password is not the same, return back 401 status code to the client.

  res.send("Hello World from route2!");
});

app.get("/questions", (req, res) => {
  res.send("Hello World from route2!");
});

app.get("/submissions", (req, res) => {
  res.send("Hello World from route2!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
