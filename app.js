// Middleware 'USE' Lessons


//1.use vs route
//2.options - our own / express / third party

const express = require('express');
const app = express();
const morgan = require('morgan');
// logger Middleware is part of its own file and is imported here
const logger = require('./logger-mw');
const authorize = require('./authorize');

// using '.use()' method to add the logger middleware to all routes in the app
// ORDER MATTERS: the logger middleware must be placed before the routes
// app.use(logger);

// to use  multiple middlewares, you can pass them in as an array
app.use(
[
    logger, 
    morgan('tiny')
]);

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
    console.log(req.user);
    res.send('Products Page');
});

// you can also apply multiple middleware to specific routes
// by passing in the middleware as an array
app.get('/api/customers',(req, res) => {

    res.send('Customers Page');
});


app.listen(5000, () => {
    console.log('Server is running on port 5000....');
});