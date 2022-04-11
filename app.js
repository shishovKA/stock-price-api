const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello Митильба!')
});

const cors = require('cors');
app.use(cors());

const router = require('./router/index');
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});