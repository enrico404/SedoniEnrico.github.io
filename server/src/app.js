
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg')


var conString = "postgres://zrqtxhzs:U1yc6ybi-HSMx8DTfkqngKUv3X4ae2i8@pellefant.db.elephantsql.com:5432/zrqtxhzs";



var app = express();
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies






// GET method route
app.get('/blog/get', function (req, res) {
    var client = new pg.Client(conString);
    client.connect(function(err){
        if(err) {
            return console.error('could not connect to postgres', err);
          }
       client.query("select * from posts", function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            

            res.send(result.rows);
            client.end();
           
       

         });
        
    });
    
  });
  


  // POST method route
  app.post('/blog/post', function (req, res) {
   
    var client = new pg.Client(conString);
    
    
    client.connect(function(err){
        if(err) {
            return console.error('could not connect to postgres', err);
          }
          
          
         client.query("insert into posts values('"+req.body.titolo+"','"+ req.body.descr+"','"+req.body.data+"')", function(err, result,) {
            
            if(err) {
              return console.error('error running query', err);
            }
            
            res.send(result);
            client.end();


         });
         
    });
    
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});