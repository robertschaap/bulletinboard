// Declarations
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const app = express();
const myport = 3000;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.listen(myport, () => console.log(`Now listening on http://localhost:${myport}`));

//Routes
app.get('/', (req, res) => {
    res.redirect('/readsomething?sort=desc');
});

app.get('/readsomething', (req, res) => {
    database.retrieveRecords(0, req.query.sort ? req.query.sort : 'desc')
    .then( output => res.render('read', { output: output }) )
    .catch( console.error );
});

app.get('/writesomething', (req, res) => {
    res.render('write');
});

app.post('/postcomment', (req, res) => {
    database.insertRecords(req)
    .then( () => res.redirect('/readsomething') )
    .catch( console.error );
});

app.get('/morecomments', (req, res) => {
    database.retrieveRecords(req.query.input, req.query.sort)
    .then( output => res.send({ output: output }) )
    .catch( console.error );
});
