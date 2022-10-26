const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const subject = require('./data/subject.json');

app.get('/', (req, res) => {
    res.send('Subject API running');
});

app.get('/subject-courses', (req, res) => {
    res.send(subject);
})

app.listen(port, () => {
    console.log('Programming Education Server running on port', port);
})