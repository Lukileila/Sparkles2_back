const pool = require('../db/sqlClient');


const getCommentFromSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const { rows } = await pool.query('SELECT * FROM comments WHERE "productID" = $1;', [productId]);
        if (!rows.length) throw new Error('Comment not found');
    
        return res.json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {getCommentFromSingleProduct};