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
/* users */
app.get('/api/usersList', async function (req, res) {
  const table = await knex('client_profile as cp')
    .join('age_info as a', 'cp.age_id', 'a.id')
    .join('ms_info as ms', 'cp.ms_id', 'ms.id')
    .join('education_info as e', 'cp.education_id', 'e.id')
    .join('incomes_info as i', 'cp.incomes_id', 'i.id')
    .select(knex.raw (`cp.passport_seria as passport_seria,
      cp.passport_number ,
      cp.PIB ,
      cp.adress,
      cp.phone_number,
      cp.age_id,
      cp.ms_id,
      cp.education_id,
      cp.incomes_id,
      round((a.mark + ms.mark + i.mark + e.mark)/4, 2) as rank,
      a.mark as age_mark,
      ms.mark as ms_mark,
      i.mark as incomes_mark,
      e.mark as education_mark`))
  res.send(table)
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

/*age*/
app.get('/api/ageList', async function (req, res) {
  res.send(await knex('age_info'))
})

app.post('/api/addAge', async function (req, res) {
  const { age, mark } = req
  res.send(await knex('age_info').insert({age, mark}))
})

/*ms*/
app.get('/api/msList', async function (req, res) {
  res.send(await knex('ms_info'))
})

app.post('/api/addMs', async function (req, res) {
  const { label, mark } = req
  res.send(await knex('ms_info').insert({label, mark}))
})

/*education*/
app.get('/api/educationList', async function (req, res) {
  res.send(await knex('education_info'))
})

app.post('/api/addMs', async function (req, res) {
  const { label, mark } = req
  res.send(await knex('education_info').insert({label, mark}))
})

/*incomes*/
app.get('/api/incomesList', async function (req, res) {
  res.send(await knex('incomes_info'))
})

app.post('/api/addMs', async function (req, res) {
  const { count, mark } = req
  res.send(await knex('incomes_info').insert({count, mark}))
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
