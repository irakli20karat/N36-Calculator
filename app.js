const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    try {
        let num1 = +req.query.num1;
        let num2 = +req.query.num2;

        num1 && num2 ? res.send(`${num1 + num2}`) : res.sendFile(__dirname + '/index.html');
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, function () {
    console.log("Server is running on port", port);
})
