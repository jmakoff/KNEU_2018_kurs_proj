const express = require('express');
const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5433,
    user: 'yuriy',
    database: 'kredytDB',
    password: '1111'
  },
})

app.use(express.static("front"));

app.get('/users', async function (req, res) {
  res.send(await knex.select().from('klient_profile'))
});

app.get('/api', (req, res) => {
    res.send('prefix for api routes');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
