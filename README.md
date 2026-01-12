
# Bike Library API

A simple REST API built with Nest.js for managing a bike library. This API supports CRUD operations on bike data, using SQLite for persistence and includes Swagger for API documentation.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Swagger Documentation](#swagger-documentation)
7. [Screenshots](#screenshots)

---

## Features

- **CRUD Operations**: Add, update, fetch, and delete bikes from the library.
- **Validation**: DTOs to validate incoming requests.
- **SQLite**: Lightweight database for persistence.
- **Swagger**: Integrated for easy API exploration and documentation.

---

## Tech Stack

- **Nest.js**: Node.js framework.
- **SQLite**: Embedded database.
- **TypeORM**: ORM for database interactions.
- **Swagger**: For API documentation.

---

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amrit1004/bike-library-api.git
   cd bike-library-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   The project uses SQLite, which requires no additional setup. The database file will be automatically created as `bike_library.db` in the root directory.

4. **Run the API**:
   ```bash
   npm run start
   ```

5. **Access the API**:
   - API base URL: `http://localhost:3000/`
   - Swagger documentation: `http://localhost:3000/api`

---

## Usage

Once the API is running, you can perform the following actions:

- **Get all bikes**: `GET /bikes`
- **Get a specific bike**: `GET /bikes/:id`
- **Create a new bike**: `POST /bikes`
- **Update an existing bike**: `PUT /bikes/:id`
- **Delete a bike**: `DELETE /bikes/:id`

---

## API Endpoints

| Method   | Endpoint       | Description                    |
|----------|----------------|--------------------------------|
| `GET`  | `/bikes`       | Fetch all bikes in the library |
| `POST` | `/bikes`       | Add a new bike to the library  |
| `GET`  | `/bikes/:id`   | Fetch a single bike by ID      |
| `PUT`  | `/bikes/:id`   | Update details of a bike       |
| `DELETE` | `/bikes/:id` | Delete a bike from the library |

---

## Swagger Documentation

Swagger is integrated to provide interactive API documentation. Once the app is running, access the Swagger interface at `http://localhost:3000/api`.

---

## Screenshots

### Swagger Interface

#### **API Overview**
![Swagger API Overview](./screenshots/swagger-overview.png)

#### **Example of API Call in Swagger**
![Swagger API Call](./screenshots/swagger-api-call.png)

---

### Notes

- **Database**: The SQLite database (`bike_library.db`) will be created automatically in the project root when the API is started.
- **Error Handling**: The API returns appropriate error messages for invalid requests (e.g., non-existent bike IDs).

