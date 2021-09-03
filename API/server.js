const express = require('express');

let created_time = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let message = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let id = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')
let story = require('C:/Users/Katie Veneziano/Documents/GitHub/fb_proj/my-app/.env')

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
    sql.connect(config, function (err, e) {
        if (err) console.log(err);
        var request = new sql.Request();
            request.query(
                "INSERT INTO apiData (createdTimeStored, messageStored, idStored, storyStored) VALUES (created_time, message, id, story)", function (err, recordset) {
            if (err) console.log(err);
                res.send(recordset);
            });
    });
});

var server = app.listen(4741, function () {
    console.log('Server is running on port 4741...');
});