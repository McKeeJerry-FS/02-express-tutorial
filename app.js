const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    // Home Page
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.end();
    } 
    // About Page
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Us</h1>');
        res.end();
    } 
    // Contact Page
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contact Us</h1>');
        res.end();
    } 
    // 404 Page -  if nothing matches
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
  
});

server.listen(5000);
