const express = require("express");
const app = express();
const Router = express.Router();

app.use("/check", Router);
// Define a route in the Router
Router.get("/hi", (req, res) => {
    res.send("This is the /check route");
});

// Mount the Router on the /check path

// Define another route directly on the app
app.get("/login", Router, (req, res) => {
    res.send("loginnnn");
});

app.get("/")

// Start the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});