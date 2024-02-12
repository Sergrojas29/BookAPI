# BookAPI

## Introduction
This is a basic API designed to interact with a NoSQL database (MongoDB) for managing a book collection. The API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on books stored in the database.

Technologies Used

    Node.js: Runtime environment for running JavaScript server-side.
    Express.js: Web application framework for Node.js.
    MongoDB: A NoSQL database used for storing book data.
    Mongoose: Node. js-based Object Data Modeling (ODM) library for MongoDB.


## API Endpoints

    https://smiling-erin-hen.cyclic.app/api/book

### Create a Book
    Endpoint: POST /api/books

    Request Body:
    :
    {
    "title": "Book Title",
    "author": "Author Name",
    "inventory": "inventory",
    "price": "price"
    }


    Response:
    Status: 200
    :
    {
    "_id": "unique_id",
    "title": "Book Title",
    "author": "Author Name",
    "inventory": "inventory",
    "price": "price"
    }


### Get All Books
    Endpoint: GET /api/books
    Response:
    Status: 200 OK
    Body:
    
    [
    {
        "id": "unique_id",
        "title": "Book Title",
        "author": "Author Name",
        "inventory": "Genre",
        "price": 2022
    },
    ...
    ]


### Get a Single Book
    Endpoint: GET /api/books/

    Request Body:
    {
    "_id": "_id",
    }

    Response:
    Status: 200 OK
    Body:
    
    {
        "id": "unique_id",
        "title": "Book Title",
        "author": "Author Name",
        "inventory": "inventory",
        "price": "price",

    }

    else: 
    Status: 404 Not Found `No book under that id ${error}`


### Update a Book
    Endpoint: PUT /api/books/

    Request Body:
    {
    "id": "unique_id",    
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "inventory": "Updated Inventory",
    "price": "price"
    }
    Response:
    Status: 200 OK
    Body:
    
    {
    "id": "unique_id",
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "inventory": "Updated Inventory",
    "price": "price"
    }

### Delete a Book
    Endpoint: DELETE /api/books/
    
    Request Body:
    {
    "_id": "_id",
    }

    Response:
    Status: 200 ok
    Body: None




## Error Handling
For this simple Error Handling I used asynce functions to wait on the database and try/catch to prevent server crash due errors. 

## Authentication and Authorization

Future implementation.
Login in jsonWebToken or simple code validation could be added.

## License
This project is licensed under the MIT License.