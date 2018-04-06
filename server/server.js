const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var fs = require('fs');

app.get('/products', ((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    res.sendFile('/React Project/blog-website/server/product.json')
  }))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({ type: 'application/json' }));

  app.post("/products/:id", function(request, response) {
})
 });

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on 8080')
  })
