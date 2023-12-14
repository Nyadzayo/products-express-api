// index.js
const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getProductById);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
