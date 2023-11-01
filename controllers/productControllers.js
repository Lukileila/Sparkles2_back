const pool = require('../db/sqlClient');

const getAllProducts = async (req,res) => {
    try{
        const {rows} = await pool.query('SELECT * FROM "products";')
        return res.json(rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};

const getProduct = async (req,res) => {
    try{
        const {productId}=req.params;
        const singleProduct = await pool.query(`SELECT * FROM products WHERE \"productID\"=$1`,[productId])
        return res.json(singleProduct);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};


module.exports = {getAllProducts, getProduct};