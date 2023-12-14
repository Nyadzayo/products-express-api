// services/productService.js
const { Product } = require('../models');

class ProductService {
  async createProduct(name, description, price) {
    try {
      const newProduct = await Product.create({
        name,
        description,
        price,
      });

      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);

      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, name, description, price) {
    try {
      const product = await Product.findByPk(productId);

      if (!product) {
        return null;
      }

      const updatedProduct = await product.update({
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      });

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);

      if (product) {
        await product.destroy();
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();

