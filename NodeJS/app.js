const { application } = require('express');
const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    // localhost:PORT/endpoint 
    // localhost:3000/test
    res.send("GET request and this is the respose");
});

app.listen(3000, () => {
    console.log("SERVER ARE WORKING ...");
});