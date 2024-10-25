// Middleware Basics Lessons

const express = require('express');
const app = express();
// req => middleware(some kind of functionality) => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing');
    // you must pass off to the 'next()' middleware in order to avoid errors
    next();
};

// To add the Middelware, add it as a second argument
// in any route you want to use it
app.get('/', logger, (req, res) => {
    
    res.send('Home');
});

app.get('/about', logger, (req, res) => {

    res.send('About');
});


app.listen(5000, () => {
    console.log('Server is running on port 5000....');
});