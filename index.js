// very similar to the simple "hello world" example:
// https://expressjs.com/en/starter/hello-world.html
const express = require('express');
const sethData = require('./seth-data.json');

const app = express();

app.get('/', (req, res) => res.json(sethData));

app.listen(3000, () => console.log('Example app listening on port 3000!'));