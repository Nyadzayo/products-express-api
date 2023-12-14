# products-express-api

restiful api for product store based app

Running the API Locally:
git clone <repository-url>
cd <repository-directory>

Prerequisites:
Node.js 19.x.x and npm installed.
MySQL server installed and running.
Sequelize CLI installed globally:

update your config.js to your database username and password

npm install -g sequelize-cli

npm install

npx sequelize-cli db:create products

or create an empty databased called products in mysql

npx sequelize-cli db:migrate

seeding the database with sample data from from the seeding file :

npx sequelize-cli db:seed:all

start the api:
npm start

The API should be running at http://localhost:3000.

How to use the api :

Create Product:
POST /products
Read Products:
GET /products
Read Single Product:
GET /products/:id
Update Product:
PUT /products/:id
Delete Product:
DELETE /products/:id
