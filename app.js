const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.set('view engine', 'ejs');

const viewsDirectory = path.join(__dirname, 'views');

const { rainfallData, expensesData } = require('./public/js/data.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getData', (req, res) => {
  const data = {
    rainfallData,
    expensesData,
  };

  res.json(data);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/bar', (req, res) => {
  res.render('bar', { rainfallData });
});

app.get('/pie', (req, res) => {
  res.render('pie', { expensesData });
});

app.get('/line', (req, res) => {
  res.render('line', { expensesData });
});

app.get('/scatter', (req, res) => {
  res.render('scatter', { rainfallData });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
