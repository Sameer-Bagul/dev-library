### Web Server using Node.js

#### What is a Web Server?
- A **web server** is a software application that delivers web pages to users' browsers over the **HTTP** protocol.
- It listens for incoming requests from clients (usually web browsers), processes those requests, and sends back the appropriate response, which could be a web page, an image, a file, or any other resource.
- Web servers can serve **static** content (e.g., HTML, CSS, JavaScript, images) or **dynamic** content (e.g., generated by server-side scripts, databases).

---

#### What is the `nodemon` Tool?
- `**nodemon**` is a utility that monitors for file changes in a Node.js application and automatically restarts the server when any changes are made.
- It helps developers by avoiding the need to manually restart the server during development, improving workflow efficiency.
- **Installation:**
  ```bash
  npm install -g nodemon
  ```
- **Usage:**
  To start a server with `nodemon`, use the command:
  ```bash
  nodemon server.js
  ```

---

#### What is a Client and Server?
- **Client**: A client is a device or software that requests resources from a server. In web development, the client is usually a **web browser** (Chrome, Firefox, etc.).
- **Server**: A server is a machine or software that responds to client requests by providing resources or services, such as web pages, images, or files.
  
---

#### What is a Request and Response?
- **Request**: A request is sent by the client to the server, asking for a resource or action. It typically includes:
  - **Method** (GET, POST, etc.)
  - **Headers** (metadata about the request)
  - **Body** (data sent with the request, if any)
  
- **Response**: A response is sent by the server to the client, containing the requested resource or status about the request.
  - **Status code** (e.g., 200, 404)
  - **Headers** (metadata about the response)
  - **Body** (data sent back, such as HTML content)

---

#### What is HTTP?
- **HTTP (HyperText Transfer Protocol)** is a protocol for transmitting hypertext (HTML, JSON, etc.) over the web.
- It defines how **requests** and **responses** should be formatted between clients and servers.
- HTTP is **stateless**, meaning each request is independent and does not retain any memory of previous interactions.

---

#### HTTP Protocols
- **HTTP/1.0**: The first version of HTTP, released in 1996.
- **HTTP/1.1**: The most common version, with improvements for handling persistent connections, caching, etc.
- **HTTP/2**: Introduced multiplexing, header compression, and other optimizations for faster communication.
- **HTTP/3**: The newest version, based on the QUIC protocol, aims to improve speed and security further.

---

#### HTTP Methods
- **GET**: Requests data from a server.
- **POST**: Sends data to the server, often to submit form data or create a resource.
- **PUT**: Updates existing data on the server.
- **DELETE**: Deletes data from the server.
- **PATCH**: Partially updates existing data.
- **OPTIONS**: Describes the communication options for the target resource.
- **HEAD**: Similar to GET, but it only retrieves the headers, not the body.

---

#### HTTP Status Codes
- **1xx (Informational)**: Request received, continuing process.
- **2xx (Success)**: The request was successful.
  - **200 OK**: The request was successful.
  - **201 Created**: The resource was successfully created.
- **3xx (Redirection)**: Further action is needed to complete the request.
  - **301 Moved Permanently**: Resource has been permanently moved.
  - **302 Found**: Temporary redirect.
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
  - **404 Not Found**: The resource was not found.
  - **400 Bad Request**: Invalid request syntax.
- **5xx (Server Error)**: The server failed to fulfill a valid request.
  - **500 Internal Server Error**: The server encountered an error.

---

#### HTTP Request Structure
- **Request Line**: Contains the **method** (GET, POST, etc.), the **URL**, and the **HTTP version**.
  - Example: `GET /index.html HTTP/1.1`
- **Headers**: Additional metadata about the request (e.g., `User-Agent`, `Content-Type`).
- **Body**: Optional data sent with the request (e.g., form data or JSON payload).

---

#### HTTP Response Structure
- **Status Line**: Includes the **HTTP version**, **status code**, and **status message**.
  - Example: `HTTP/1.1 200 OK`
- **Headers**: Metadata about the response (e.g., `Content-Type`, `Cache-Control`).
- **Body**: The actual content returned by the server (e.g., HTML, JSON).

---

#### Creating a Simple Web Server using Node.js
1. **Code Example:**
   - Create a file `server.js` and add the following code to create a simple web server:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;  // Status Code: OK
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!\n');  // Response body
   });

   server.listen(3000, () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```
2. **Running the Server:**
   - To run the server, use the command:
   ```bash
   node server.js
   ```
3. **Testing:**
   - Open a browser and go to `http://localhost:3000/`. You should see the message "Hello, World!".

---

#### Routing in Node.js
- Routing determines how your server responds to different HTTP requests based on the URL and HTTP method.
- **Example of Basic Routing:**
   ```javascript
   const http = require('http');
   const url = require('url');

   const server = http.createServer((req, res) => {
     const pathname = url.parse(req.url).pathname;

     if (pathname === '/home') {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Welcome to the Home Page!');
     } else if (pathname === '/about') {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('This is the About Page.');
     } else {
       res.statusCode = 404;
       res.end('Page Not Found');
     }
   });

   server.listen(3000, () => {
     console.log('Server running at http://localhost:3000/');
   });
   ```

---

#### Handling Different HTTP Methods in Node.js
- You can check the method of the incoming request using `req.method` to handle different types of requests like **GET**, **POST**, **PUT**, etc.
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
      res.statusCode = 200;
      res.end('GET Request Received');
    } else if (req.method === 'POST') {
      res.statusCode = 200;
      res.end('POST Request Received');
    } else {
      res.statusCode = 405;  // Method Not Allowed
      res.end('Method Not Allowed');
    }
  });

  server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
  });
  ```

---

#### Working with the HTTP Module
- **Creating an HTTP Server**:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!');
   });

   server.listen(3000, () => {
     console.log('Server running on http://localhost:3000/');
   });
   ```
- **Making HTTP Requests (Client)**:
   ```javascript
   const http = require('http');

   const options = {
     hostname: 'example.com',
     port: 80,
     path: '/',
     method: 'GET'
   };

   const req = http.request(options, res => {
     console.log(`STATUS: ${res.statusCode}`);
     res.setEncoding('utf8');
     res.on('data', chunk => {
       console.log(`BODY: ${chunk}`);
     });
   });

   req.on('error', e => {
     console.error(`Problem with request: ${e.message}`);
   });

   req.end();
   ```

---

#### Sending Responses in Node.js
- To send responses, you use the `res` object:
  - **Sending Text**: 
    ```javascript
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
    ```
  - **Sending JSON**:
    ```javascript
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, World!' }));
    ```

---

#### Customizing Response Headers
- You can set custom headers using `res

.setHeader()`:
  ```javascript
  res.setHeader('Cache-Control', 'no-cache');
  ```

---

#### Summary
- Node.js can be used to create a web server that listens for HTTP requests and sends responses.
- **HTTP methods** and **status codes** help define how the server responds to requests.
- **`nodemon`** is a helpful tool for development that automatically restarts the server on file changes.
- The **request-response cycle** is fundamental in web development, with the server processing requests and returning the corresponding responses.

