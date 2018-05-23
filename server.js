const express = require('express');
const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'yuriy',
    database: 'kredytDB',
    password: '1111'
  },
})

app.use(express.static("front"));
/* users */
app.get('/api/usersList', async function (req, res) {
  res.send(await knex.select().from('client_profile'))
});

app.post('/api/addUser', async function (req, res) {
  const { passport_seria, passport_number, PIB, adress, phone_number, age_id, ms_id, education_id, incomes_id } = req
  res.send(await knex('client_profile').insert({ passport_seria, passport_number, PIB, adress, phone_number, age_id, ms_id, education_id, incomes_id }))
});

app.get('/api/user/:id', async function (req, res) {
  res.send(await knex('client_profile').where({id: req.params.id}))
});

app.post('/api/user/:id', async function (req, res) {
  const { passport_seria, passport_number, PIB, adress, phone_number, age_id, ms_id, education_id, incomes_id } = req
  res.send(await knex('client_profile').where({id: req.params.id}).update({ passport_seria, passport_number, PIB, adress, phone_number, age_id, ms_id, education_id, incomes_id }))
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
