const express = require('express');

let created_time = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let message = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let id = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let story = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')

const cors = require('cors');
var app = express();
app.use(cors());

app.get('/GET', function (req, res) {
    console.log(req.params)
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
    // console.log(req.params)
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
                "INSERT INTO [dbo].[facebookData] ([created]) VALUES " + (`${JSON.stringify(created_time)}`), function (err, recordset) {
                    console.log(created_time)
            if (err) console.log(err);
                res.send(recordset);
            });
    });
});

var server = app.listen(4741, function () {
    console.log('Server is running on port 4741...');
});