class IndexController {
    getItems(req, res) {
        // Logic to retrieve items
        res.send("Items retrieved successfully");
    }

    createItem(req, res) {
        // Logic to create a new item
        res.send("Item created successfully");
    }
}

module.exports = IndexController;