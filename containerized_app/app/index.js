const express = require("express");

const app = new express();
const host = "0.0.0.0";
const port = 3000;

app.get('/', (req, res) => {
    res.type('application/json');
    res.send(
        JSON.stringify({
            message: "hello-world"
        })
    );
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}!`);
});