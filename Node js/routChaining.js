
const express = require('express');
const app = express();

// Middleware to log request
const logRequest = (req, res, next) => {
  console.log('Request received');
  next();
};

// Middleware to simulate authentication check
const isAuthenticated = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
};

// Route chaining using app.route()
app.route('/dashboard')
  .get(logRequest, isAuthenticated, (req, res) => {
    res.send('Dashboard GET request successful');
  })
  .post(logRequest, isAuthenticated, (req, res) => {
    res.send('Dashboard POST request successful');
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

