const express = require('express')
const updateOrders = express.Router()
const { Orders } = require('../Orders')
updateOrders.post("/updateOrders/:id", async (req, res) => {
    const idOrder = req.params.id;
    await Orders.updateOne(
        { _id: idOrder },
        {
            $set: {
                status: "accepted",
            },
        }
    );
    res.json({ status: "OK" });
});





module.exports = updateOrders