const express = require('express');
const path = require('path');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

require(path.resolve('server', 'middlewares', 'index.middleware'))(app);
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.get('/test', function(req, res) {
    res.json({
        message: 'success fetch from server'
    })
});

module.exports = app;