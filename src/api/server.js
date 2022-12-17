/* ==================================================
                         API
================================================== */
const { spawn } = require("child_process");
const express = require('express')
const app = express();

// NGINX MANAGEMENT
app.post('/api/start', (req, res) => {
    spawn('service', ['nginx', 'start']).stdout.on('data', output => {
        console.log(output.toString())
    })
    return res.send('Started Nginx');
});
app.post('/api/stop', (req, res) => {
    spawn('service', ['nginx', 'stop']).stdout.on('data', output => {
        console.log(output.toString())
    })
    return res.send('Stopped Nginx');
});
app.post('/api/reload', (req, res) => {
    spawn('service', ['nginx', 'reload']).stdout.on('data', output => {
        console.log(output.toString())
    })
    return res.send('Reloaded Nginx');
});

// GENERATE CERTIFICATE FOR A DOMAIN
app.post('/api/ssl/:domain', (req, res) => {
    spawn('certbot', ['certonly', '--standalone', '-d', req.params.domain]).stdout.on('data', output => {
        console.log(output.toString())
    })
    return res.send('Reloaded Nginx');
});

// RUN API
app.listen(8888, '0.0.0.0', () =>
    console.log(`✨ Dockhost API listening on 8888!`),
);
