const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('hello there!');
})

const port = 80;

app.listen(port, () => {
console.log('port running @ 80');
})
