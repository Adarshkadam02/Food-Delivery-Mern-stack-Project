const express = require('express');
const app = express();
const port = 5000;


const db = require('./db');
db;

app.get('/', (req, res) => {
  res.send('Hello, Express with MongoDB!');
});
app.use(express.json())
app.use('/api', require("./Routes/Createuser"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
