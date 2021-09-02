const express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());

app.post('/', function (req, res) {
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
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
            request.query(
                "INSERT INTO fbFaves (created_time,id,message)", function (err, recordset) {
            if (err) console.log(err);
                res.send(recordset);
    });
});
});

var server = app.listen(4741, function () {
    console.log('Server is running on port 4741...');
});