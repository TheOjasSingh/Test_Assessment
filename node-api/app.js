// app.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`API is running on http://0.0.0.0:${port}`);
});
