import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    
    const newProduct = new productModel({
        name,
        category,
        quantity,
        price,
        description,
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};


const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};



export { addProduct, getProducts, getProduct, updateProduct, deleteProduct };