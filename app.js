const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const static_path = path.join(__dirname, './public')
const template_path = path.join(__dirname, './templates/views')
const partials_path = path.join(__dirname, './templates/partials')

const port = process.env.PORT || 8080;
require('dotenv').config();

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('/about_us', (req, res) => {
    res.render('about_us')
})

app.get('*', (req, res) => {
    res.render('404error')
})
app.listen(port, () => {
    console.log('Successfully');
})