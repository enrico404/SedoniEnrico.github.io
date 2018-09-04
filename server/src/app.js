
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg')


var conString = "postgres://gehrvgxq:R5GSavOLk7wlziJ21-2uRD3-Zju3V6h2@pellefant.db.elephantsql.com:5432/gehrvgxq";
var client = new pg.Client(conString);


var app = express();
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies






// GET method route
app.get('/blog/get', function (req, res) {
    client.connect(function(err){
        if(err) {
            return console.error('could not connect to postgres', err);
          }
       client.query("select * from posts", function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            client.end();

            res.send(result);
          
           
       

         });
    });
  });
  


  // POST method route
  app.post('/blog/post', function (req, res) {

    client.connect(function(err){
        if(err) {
            return console.error('could not connect to postgres', err);
          }
         client.query("insert into posts values('hollaaaa','aaaa')", function(err, result,) {
            if(err) {
              return console.error('error running query', err);
            }
            client.end();
            res.send(result);
            


         });
    });
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});