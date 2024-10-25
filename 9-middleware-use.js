// Middleware 'USE' Lessons

const express = require('express');
const app = express();
// logger Middleware is part of its own file and is imported here
const logger = require('./logger-mw');

// using '.use()' method to add the logger middleware to all routes in the app
// ORDER MATTERS: the logger middleware must be placed before the routes
app.use(logger);

// you can also apply it to paths
// app.use('/api', logger);
// this means that this middleware will be applied to any route that has '/api'

app.get('/', (req, res) => {
    
    res.send('Home');
});

app.get('/about',(req, res) => {

    res.send('About');
});

app.get('/api/products',(req, res) => {

    res.send('Products Page');
});

app.get('/api/customers',(req, res) => {

    res.send('Customers Page');
});


app.listen(5000, () => {
    console.log('Server is running on port 5000....');
});