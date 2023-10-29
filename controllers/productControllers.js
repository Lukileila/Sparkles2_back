const pool = require('../db/sqlClient');

const getAllProducts = async (req,res) => {
    try{
        const allUsers = await pool.query('SELECT * FROM "products";')
        return res.json(allUsers);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};

const getProduct = async (req,res) => {
    try{
        return res.json({})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};

module.exports = {getAllProducts, getProduct};