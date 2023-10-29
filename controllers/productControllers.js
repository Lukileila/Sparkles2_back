const getAllProducts = async (req,res) => {
    try{
        return resizeBy.json({})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};

const getProduct = async (req,res) => {
    try{
        return resizeBy.json({})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message});
    }
};




module.exports = {getAllProducts, getProduct};