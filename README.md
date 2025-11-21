## 🌐 Live Demo

🚀 **Live API Base URL:**  
👉 **(https://contact-api-a846.onrender.com)**  

📇 Contacts API (Node.js + Express + JWT)

A simple and secure RESTful Contacts API built with Node.js, Express.js, MongoDB, and JWT authentication.
This API allows users to register, log in, and manage their personal contact list.

🚀 Features

🔐 User Authentication

Register 
Login

📇 Contact Management

Create a contact , 
Get all contacts , 
Get a single contact , 
Update a contact , 
Delete a contact , 

🌐 RESTful API

🗄️ MongoDB & Mongoose

🧪 Error handling & validation

🛠️ Technologies Used

Node.js
Express.js
MongoDB + Mongoose
JWT (JSON Web Token)
bcryptjs
dotenv


🔑 API Endpoints
Auth Routes
| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| POST   | `/api/users/register` | Register a new user  |
| POST   | `/api/users/login`    | Login user & get JWT |

Contact Routes (Protected)
| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/contacts`     | Get all contacts  |
| POST   | `/api/contacts`     | Create a contact  |
| GET    | `/api/contacts/:id` | Get contact by ID |
| PUT    | `/api/contacts/:id` | Update contact    |
| DELETE | `/api/contacts/:id` | Delete contact    |
