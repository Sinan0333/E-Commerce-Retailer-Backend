export const addProductValidation = (req, res, next) => {
    const { name, category, quantity, price, description } = req.body;
    if (!name || !category || !quantity || !price || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if(quantity < 0 || price < 0) {
        return res.status(400).json({ error: "Quantity and price must be greater than 0" });
    }

    if(name.length < 3 || category.length < 3 || description.length < 3) {
        return res.status(400).json({ error: "Name, category and description must be at least 3 characters long" });
    }

    next();
}


export const updateProductValidation = (req, res, next) => {
    const {name, category, quantity, price, description} = req.body;

    if(name && name.length < 3) {
        return res.status(400).json({ error: "Name must be at least 3 characters long" });
    }

    if(category && category.length < 3) {
        return res.status(400).json({ error: "Category must be at least 3 characters long" });
    }

    if(description && description.length < 3) {
        return res.status(400).json({ error: "Description must be at least 3 characters long" });
    }

    if(quantity && quantity < 0) {
        return res.status(400).json({ error: "Quantity must be greater than 0" });
    }

    if(price && price < 0) {
        return res.status(400).json({ error: "Price must be greater than 0" });
    }

    next();
}
