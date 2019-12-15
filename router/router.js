const productsController = require('../controller/productsController');
const cartController = require('../controller/cartController');

module.exports = app => {
    // product
    app.get('/', productsController.home)
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)

    // user
    // app.get('/user', usersController.listUser)
    // app.get('/user/:id', usersController.detailUser)
    // app.post('/user/', usersController.tambahUser)
    // app.put('/user/:id', usersController.ubahUser)
    // app.delete('/user/:id', usersController.hapusUser)

    // cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    // checkOut
    app.get('/cart/checkout/:id', cartController.checkOut)
}