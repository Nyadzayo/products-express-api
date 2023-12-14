// controllers/productController.js
const productService = require('../services/productServices');

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, description, price } = req.body;

      if (!name || !description || !price) {
        return res.status(400).json({ error: 'Name, description, and price are required' });
      }

      const newProduct = await productService.createProduct(name, description, price);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getProducts(req, res) {
    try {
      const products = await productService.getProducts();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getProductById(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const product = await productService.getProductById(productId);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateProduct(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const { name, description, price } = req.body;

      const updatedProduct = await productService.updateProduct(productId, name, description, price);

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteProduct(req, res) {
    try {
      const productId = parseInt(req.params.id);
      await productService.deleteProduct(productId);

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new ProductController();

