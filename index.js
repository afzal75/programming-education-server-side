const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors(cors));

app.get('/', (req, res) => {
    res.send('Subject API running');
});

app.listen(port, () => {
    console.log(`Programming Education Server running on port, ${port}`);
})