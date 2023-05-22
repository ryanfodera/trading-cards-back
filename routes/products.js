const router = require("express").Router();

// models
const Product = require("../models/Product");

// @method GET
// @route /products
// @desc get a list of all products
router.get("/", async (req, res) => {
    try {
        let products = await Product.findAll({});
        // send error if there are no products
        if (!products) return res.status(404).json({ success: false, error: "No products found" });
        products = products.map(p => p.get({ plain: true }));
        return res.json({ success: true, products });
    } catch (error) {
        return res.status(500).json({ success: true, error: error.message });
    }
});

// @method POST
// @route /products
// @desc create a new product
router.post("/", async (req, res) => {
    const { name, description, price, rating, featured, imageURL } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            rating,
            featured,
            imageURL
        });
        // send error if no product is created
        if (!newProduct.dataValues) {
            return res.status(500).json({
                success: false,
                error: "Error while creating product"
            });
        }

        return res.json({ success: true, product: newProduct });
    } catch (error) {
        return res.json({ success: false, error: error.message });
    }
});

// @method GET
// @route /products/:id
// @desc Get a single product
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let product = await Product.findOne({
            where: {
                id,
            }
        });
        if (!product) {
            return res.status(404).json({ success: false, error: "No product found with the provided ID" });
        }
        product = product.get({ plain: true });
        return res.json({ success: true, product });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// @method DELETE
// @route /products/:id
// @desc Delete a single product
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let deletedProduct = await Product.destroy({
            where: {
                id,
            },
            force: true,
        });
        if (deletedProduct < 1) {
            return res.status(404).json({ success: false, error: "No product found with the provided ID" });
        }
        return res.json({ success: true });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// @method PUT
// @route /products/:id
// @desc Update a single product
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price, rating, featured, imageURL } = req.body;
    try {
        let updatedProduct = await Product.update({
            name,
            description,
            price,
            rating,
            featured,
            imageURL
        }, {
            where: {
                id,
            }
        });
        if (updatedProduct < 1) {
            return res.status(404).json({ success: false, error: "No product found with that ID" });
        }
        return res.json({ success: true });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;