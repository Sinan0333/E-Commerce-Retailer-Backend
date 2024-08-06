# E-Commerce Retailer API

## Description

This is a RESTful API for managing an e-commerce retailer database. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on products. The project is built using Node.js and Express, with MongoDB as the database.

## Features

- Add a new product
- Get all products
- Get a single product by ID
- Update a product by ID
- Delete a product by ID

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/e-commerce-retailer.git
    cd e-commerce-retailer
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the root of the project and add the following:

    ```plaintext
    MONGO_URL=mongodb://127.0.0.1:27017/E-Commerce-Retailer
    ```

4. Start the server:

    ```sh
    npm start
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

- **Add Product**
    - **URL:** `/add`
    - **Method:** `POST`
    - **Description:** Add a new product
    - **Body Parameters:**
        - `name` (string): Name of the product
        - `category` (string): Category of the product
        - `quantity` (number): Quantity of the product
        - `price` (number): Price of the product
        - `description` (string): Description of the product

- **Get All Products**
    - **URL:** `/get`
    - **Method:** `GET`
    - **Description:** Get all products

- **Get Product by ID**
    - **URL:** `/get/:id`
    - **Method:** `GET`
    - **Description:** Get a single product by ID

- **Update Product by ID**
    - **URL:** `/update/:id`
    - **Method:** `PUT`
    - **Description:** Update a product by ID
    - **Body Parameters:** (Any fields to be updated)

- **Delete Product by ID**
    - **URL:** `/delete/:id`
    - **Method:** `DELETE`
    - **Description:** Delete a product by ID

## Project Structure

```plaintext
├── controllers
│   └── productController.js
├── middleware
│   └── productValidation.js
├── models
│   └── productModel.js
├── config
│   └── mongodb.js
├── app.js
├── index.js
├── package.json
└── .env
