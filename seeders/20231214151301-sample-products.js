'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 39.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 49.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
