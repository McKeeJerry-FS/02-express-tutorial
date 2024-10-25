// Methods Lessons

const express = require('express');
const app = express();
let { people } = require('./data');

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

