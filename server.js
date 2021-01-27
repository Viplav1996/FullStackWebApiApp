var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/FullStackWeb');

var Product = require('./model/product');
var Wishlist = require('./model/wishList');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product', function(req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, saveProduct){
        if (err) {

            res.status(500).send({error: "Could not save product"});

        } else {
            res.send(saveProduct);
        }
    })
});


app.listen(3000, function (){
    console.log("Swag shop API running on port 3000...!!!")
});
