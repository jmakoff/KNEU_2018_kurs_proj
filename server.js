const express = require('express');
const app = express();

app.use(express.static(__dirname + '/front'));

app.get('/api', (req, res) => {
    res.send('Router for api!');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});