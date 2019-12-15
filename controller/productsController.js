const Product = require('../models/product');

exports.home = (req, res) => {
    res.send("welcome to api shop");
}

exports.listProduct = async (req, res) => {
    let data = await Product.find();
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
}

exports.detailProduct = async (req, res) => {
    let data = await Product.findById(req.params.id);
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
}

exports.tambahProduct = async (req, res) => {
    const products = new Product(req.body);
    const status = await Products.save();
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.ubahProduct = async (req, res) => {
    const { id } = req.params;
    const status = await Product.update({ _id: id });
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}

exports.hapusProduct = async (req, res) => {
    const { id } = req.params;
    const status = await Product.remove({ _id: id });
    res.send(JSON.stringify({ "status": 200, "error": null, "response": status }))
}