const express = require("express");

const app = express();

app.get("/name/:id", (req, res) => {
  console.log("jhbsjhbf");
  const id = req.params.id;
  res.send(id);
});

app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`);
});




// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log("jhbsjhbf");
//   const query = req.query.name;
//   res.send(query);
// });

// app.listen(3000, () => {
//   console.log(`server is running on http://localhost:3000`);
// });
