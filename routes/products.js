var express = require('express');
var router = express.Router();
var dbProducts = require('../public/javascripts/database');

router.get('/:type', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByType(req.params.type));
    res.render('products', {products: dbProducts.getByType(req.params.type), rutas: ruta});

});

router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    var ruta = dbProducts.getImg(dbProducts.getAll());
    res.render('products', {products: dbProducts.getAll(), rutas: ruta});
});

module.exports = router;
