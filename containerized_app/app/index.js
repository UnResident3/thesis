const express = require("express");
const pClient = require('prom-client');

const counter = new pClient.Counter({
    name: 'request_input',
    help: 'Number of input requested.'
});

const responseTime = new pClient.Gauge({ 
    name: 'response_time', 
    help: 'Response Time' 
});

const app = new express();
const host = "0.0.0.0";
const port = 3000;

app.get('/', (req, res) => {
    responseTime.setToCurrentTime();
    counter.inc();
    res.type('application/json');
    res.send(
        JSON.stringify({
            message: "hello-world"
        })
    );
    responseTime.startTimer();
});

app.get('/metrics', (req, res) => {
    res.contentType(pClient.register.contentType);
    res.end(pClient.register.metrics());
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}!`);
});