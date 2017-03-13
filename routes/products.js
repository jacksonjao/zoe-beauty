var express = require('express');
var router = express.Router();
var dbProducts = require('../public/javascripts/database');
var carrito = [];

router.get('/type/:type', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByType(req.params.type));
    res.render('products', {products: dbProducts.getByType(req.params.type), rutas: ruta, title: 'Makeup for the '+req.params.type});

});

router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    var ruta = dbProducts.getImg(dbProducts.getAll());
    res.render('products', {products: dbProducts.getAll(), rutas: ruta, title: 'All of our products'});
});

router.get('/brand/:brand', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByBrand(req.params.brand));
    res.render('products', {products: dbProducts.getByBrand(req.params.brand), rutas: ruta, title: 'Makeup from '+req.params.brand});

});

router.get('/price/:price', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByPrice(req.params.price));
    res.render('products', {products: dbProducts.getByPrice(req.params.price), rutas: ruta, title: 'Makeup by price'});

});
router.get('/rate/:rate', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getByRate(req.params.rate));
    res.render('products', {products: dbProducts.getByRate(req.params.rate), rutas: ruta, title: 'Makeup '+req.params.rate+' 4 stars'});

});
router.get('/sold/:items', function (req, res, next) {
    //res.send('respond with a resource');
    var rutas = [];
    var ruta = dbProducts.getImg(dbProducts.getBySold(req.params.items));
    res.render('products', {products: dbProducts.getBySold(req.params.items), rutas: ruta, title: 'Makeup with over '+req.params.items+' items sold'});

});

router.get('/details/:name', function (req, res, next) {
    var producto = dbProducts.getByName(req.params.name);
    var ruta= "/images/products/"+producto.type+"/"+producto.img+"";
    res.render('details', {product: producto, img : ruta,carrito: "Add to cart", title: "Zoe Beauty: "+req.params.name});
});

router.get('/selected/:name', function (req, res, next) {

    var producto = dbProducts.getByName(req.params.name);
    carrito.push(producto);
    res.redirect('/products');
/*    var ruta= "/images/products/"+producto.type+"/"+producto.img+"";
    res.render('details', {product: producto, img : ruta,carrito: "Added to cart", title: "Zoe Beauty: "+req.params.name});
console.log("El carrito tiene "+carrito.length+"productos");*/
});

router.get('/selected', function (req, res, next) {
    //res.send('respond with a resource');
   if(carrito.length >0) {
       var ruta = dbProducts.getImg(carrito);
       res.render('carrito', {products: carrito, rutas: ruta, title: 'Your Cart'});
   }else{
       
       res.redirect('/products');
   }
});

module.exports = router;
