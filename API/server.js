const express = require('express');
const logger = require('morgan');
const cors = require('cors');

var app = express();
app.use(cors(origin = 'http://localhost:4741'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let rowData = [];

app.get('/GET', function (req, res) {
    var sql = require("mssql");
    var config = {
        user: 'sa',
        password: 'rCs!@#=6',
        server: 'RCSOGAKVE621', 
        database: 'fbFaves',
        options: {
            trustServerCertificate: true, 
            instanceName: 'RCSDB',
        }
    };
    sql.connect(config, function (err, e) {
        if (err) console.log(err);
        var request = new sql.Request();
            request.query(
                "SELECT * from facebookData", function (err, recordset) {
            if (err) console.log(err);
                res.send(recordset);
            });
    });
});

app.post('/POST', function (req, res) {

    const newFavorite = {
        created_time: req.body.created_time,
        message: req.body.message,
        id: req.body.id,
        story: req.body.story,
      };
    
      rowData.push(newFavorite);
      console.log(rowData);
});

var server = app.listen(4741, function () {
    console.log('Server is running on port 4741...');
});