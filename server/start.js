const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
app.use((req, res, next) => { res.set('Content-Security-Policy', "style-src 'self' ;"); next(); });
app.use('/', proxy('http://localhost:3333'));
app.listen(5000);