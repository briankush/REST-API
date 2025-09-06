# REST API Overview

This is a simple REST API built with Node.js, Express, and MongoDB for managing users. It supports creating, reading, and deleting user records.

## Features

- Fetch all users: `GET /api/users`
- Fetch a user by ID: `GET /api/user/:id`
- Create a user: `POST /api/users`
- Delete a user by ID: `DELETE /api/user/:id`
- Delete all users: `DELETE /api/users`

## Setup Instructions

1. **Clone the repository**  
   Download or clone this project to your local machine.

2. **Install dependencies**  
   Run the following command in the project directory:
   ```
   npm install
   ```

3. **Configure MongoDB**  
   Ensure you have a running MongoDB instance. Update the connection string in `./configs/db.js` if necessary.

4. **Start the server**  
   ```
   node index.js
   ```
   The server will run on `http://localhost:3000`.

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)

Install all dependencies with:
```
npm install express mongoose
```

## Testing with Postman

1. **Open Postman** and create a new request.

2. **Test Endpoints:**
   - **Get all users:**  
     `GET http://localhost:3000/api/users`
   - **Get user by ID:**  
     `GET http://localhost:3000/api/user/{id}`
   - **Create a user:**  
     `POST http://localhost:3000/api/users`  
     Body (JSON):
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - **Delete user by ID:**  
     `DELETE http://localhost:3000/api/user/{id}`
   - **Delete all users:**  
     `DELETE http://localhost:3000/api/users`

3. **View responses** in Postman to verify API functionality.

---

For any issues, ensure MongoDB is running and dependencies are installed.
