const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {getAllProducts, getProduct} = require('./controllers/productControllers');

app.use(express.json());
app.use(cors());

app.route('/products').get(getAllProducts);

app.route('/products/:productId').get(getProduct);

app.listen(port, () => console.log(`Example app listening on ${port}`)); 