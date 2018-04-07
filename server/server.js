const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path')
var _ = require('lodash')
app.get('/products', ((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    res.sendFile(__dirname + "/" + "product.json")
    console.log('product endpoint connected')
  }))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/products/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
	fs.readFile(__dirname + "/" + "product.json", "utf8", function(err, data) {
    var products = JSON.parse(data);
    res.end( JSON.stringify(_.find(products,(o) =>
    	{ 
    		return o.id == req.params.id 
    	}
    	)) )
  })
  console.log('single product endpoint connected')
})

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on 8080')
})
