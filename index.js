const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Subject API running');
});


app.get('/courses-categories', (req, res) => {
    res.send(courses);
})

app.get('/courses-categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Programming Education Server running on port', port);
})