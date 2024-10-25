// Methods Lessons

const express = require('express');
const app = express();
let { people } = require('./data');

// Static Assets
app.use(express.static('./methods-public'));

// Parse Form Data
app.use(express.urlencoded({ extended: false }));
// Parse JSON
app.use(express.json());


// Get all People
// ./api/people
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// Get Single Person
// ./api/people/:id
app.get('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }
    res.status(200).json({ success: true, data: person });
});


// POST - Insert Data
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

// POST - Insert Data
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
    }
    res.status(201).json({ success: true, person: name });
    
})

app.listen(5000, () => {
    console.log('Server is running on port 5000....');
});

// HTTP Methods

// GET - Read Data
// POST - Insert Data
// PUT - Update Data
// DELETE - Delete Data
// PATCH - Partial Update Data
// OPTIONS - Get Information about the communication options available
// HEAD - Get the headers only
