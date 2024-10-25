const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing');
    // you must pass off to the 'next()' middleware in order to avoid errors
    next();
};

module.exports = logger;