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

const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const { rows } = await pool.query('SELECT * FROM products WHERE "productID" = $1;', [productId]);
        if (!rows.length) throw new Error('Product not found');
    
        return res.json(rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {getAllProducts, getSingleProduct};