const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port", PORT));

app.get("/", (req, res) => {
  res.send("<h1> Hello, World! </h1>");
});

app.listen(8000, () => {
  console.log(`Server is listening at http://localhost:8000`);
});
