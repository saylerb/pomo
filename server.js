const express = require('express');
const path = require('path')

const buildDirectory = path.join(__dirname, './build');

const app = express()

app.use(express.static(buildDirectory));

app.get('*', function (req, res) {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

app.listen(1234, () => {
    console.log('Application is listening on port 1234');
    console.log('Please visit http://localhost:1234');
});
