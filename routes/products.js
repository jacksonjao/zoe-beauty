var express = require('express');
var router = express.Router();
var dbProducts = require('../public/javascripts/database');

router.get('/:type', function(req, res, next) {
  //res.send('respond with a resource');

var rutas= [];


  // rutas.push(("../public/images/products/"+dbProducts.getByType(req.params.type)[i].type+"/"+dbProducts.getByType(req.params.type)[i].img));
 //   console.log(rutas[i]);
var ruta= dbProducts.getImg(dbProducts.getByType(req.params.type));


    res.render('products', {products: dbProducts.getByType(req.params.type),rutas: ruta});

});

router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
        res.render('products', {products: dbProducts.getAll()});
});

module.exports = router;
