# 🏪 Inventory Management System API

This project is a simple **Inventory Management System API** built using **Node.js**, **Express**, and **MongoDBAtlas** as a cloud database.  
It allows you to **create**, **view**, **update**, and **monitor** product inventory — including increasing and decreasing stock quantities and viewing products that are low on stock.

---

## 🚀 Features

- Create a new product  
- Get all products  
- Get products below their threshold quantity (low stock)  
- Increase stock quantity  
- Decrease stock quantity  

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDBAtlas (using Mongoose)  
- **Testing Tool:** Postman  

---

## Setup Instructions

Follow these steps to run the project locally:

### 1️. Clone the Repository

git clone https://github.com/Roshan9096/hackthon
cd hackthon

### 2. Install Dependencies
Install the required packages using:

npm install

### 3. Setup MongoDB Atlas

1.Go to MongoDB Atlas
2.Create a free cluster.
3.Inside your cluster, create a new database (e.g., inventoryDB).
4.Add a Database User and copy your connection string (URI).
Example:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/inventoryDB

### 4. Create .env File
Inside your project root, create a new file named .env:

PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net

### 5. Start the Server
cd ./src
node index.js

### Testing
for testing use **postman**

**Create Product**

POST /api/product

Request Body:
{
  "name": "Laptop",
  "stock": 20,
  "threshold": 5
}

**Get All Products**

GET /api/product

**Increase Product Stock**

PATCH /api/product/:id/increase

Request Body:
{
  "quantity": 5
}

**Decrease Product Stock**

PATCH /api/product/:id/decrease

Request Body:
{
  "quantity": 3
}

**Get Low Stock Products**

GET /api/product/lowstock


🧑‍💻 Author

Roshan Thorat
📧 roshanthorat877@gmail.com
🌐 GitHub: Roshan9096