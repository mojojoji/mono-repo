const express = require("express");
const app = express();
const port = 3000;

// Add comment test2
app.get("/", (req, res) => {
  res.send("Hello from Repo1!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
