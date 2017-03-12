var express = require('express');
var router = express.Router();
var dbProducts = require('../public/javascripts/database');


router.get('/type/:type', function (req, res, next) {
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

router.get('/brand/:brand', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByBrand(req.params.brand));
    res.render('products', {products: dbProducts.getByBrand(req.params.brand), rutas: ruta});

});

router.get('/price/:price', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByPrice(req.params.price));
    res.render('products', {products: dbProducts.getByPrice(req.params.price), rutas: ruta});

});
router.get('/rate/:rate', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByRate(req.params.rate));
    res.render('products', {products: dbProducts.getByRate(req.params.rate), rutas: ruta});

});
router.get('/sold/:items', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getBySold(req.params.items));
    res.render('products', {products: dbProducts.getBySold(req.params.items), rutas: ruta});

});


module.exports = router;
