const express = require('express');
const app = express();
const {getAllProducts, getSingleProduct} = require('./controllers/productControllers');

const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Welcome to the Sparkles API!'));

app.route('/products').get(getAllProducts);

app.route('/products/:productId').get(getSingleProduct);

app.listen(port, () => console.log(`Example app listening on ${port}`)); 