const express = require("express");
const app = express();
app.listen(process.env.PORT || 8000);

app.get("/", (req, res) => {
  res.send("<h1> Hello, World! </h1>");
});

app.listen(8000, () => {
  console.log(`Server is listening at http://localhost:8000`);
});
