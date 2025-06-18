# To-Do List API

This is a simple To-Do List API built with Node.js, Express, and MySQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Features

- Get all to-do items
- Create a new to-do item
- Delete a to-do item

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (LTS version recommended)
- MySQL Server

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd to-do-list-api

2. Install dependencies:
   ```bash
   npm install

## Database Setup
1. Create a MySQL database 

## API Endpoints

All endpoints are prefixed with `/api`.

### Get All To-Do Items

- **URL:** `/todos`
- **Method:** `GET`
- **Description:** Retrieves a list of all to-do items.
- **Response Example (200 OK):**
  ```json
  [
    {
      "id": 1,
      "title": "Buy groceries"
    },
    {
      "id": 2,
      "title": "Finish report"
    }
  ]
  ```

### Create a New To-Do Item

- **URL:** `/todos`
- **Method:** `POST`
- **Description:** Creates a new to-do item.
- **Request Body Example:**
  ```json
  {
    "title": "New task to do"
  }
  ```
- **Response Example (201 Created):**
  ```json
  {
    "id": 3,
    "title": "New task to do"
  }
  ```

### Update a To-Do Item

- **URL:** `/todos/:id`
- **Method:** `PUT`
- **Description:** Updates an existing to-do item by its ID.
- **URL Parameters:**
  - `id`: The ID of the to-do item to update (e.g., `/todos/1`)
- **Request Body Example:**
  ```json
  {
    "title": "Updated task title"
  }
  ```
- **Response Example (200 OK):**
  ```json
  {
    "message": "Todo updated successfully"
  }
  ```
- **Response Example (404 Not Found):**
  ```json
  {
    "message": "Todo not found"
  }
  ```

### Delete a To-Do Item

- **URL:** `/todos/:id`
- **Method:** `DELETE`
- **Description:** Deletes a to-do item by its ID.
- **URL Parameters:**
  - `id`: The ID of the to-do item to delete (e.g., `/todos/1`)
- **Response Example (200 OK):**
  ```json
  {
    "message": "berhasil hapus todo"
  }
  ``` 