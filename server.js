// Import the '"createServer" method from the built-in "http" module in Node.js
import { createServer } from "node:http";

// Export "server" which is created using the "createServer" from above method
export const server = createServer((request, response) => {
  // Check the URL of the incoming request
  if (request.url === "/hello") {
    // If the URL is "/hello", set the response status code to 200 (OK)
    response.statusCode = 200;
    // End the response and send "Hello World" back to the client
    response.end("Hello World");
  } else if (request.url === "/bye") {
    // If the URL is "/bye", set the response status code to 200 (OK)
    response.statusCode = 200;
    // End the response and send "Bye World" back to the client
    response.end("Bye World");
  } else {
    // If the URL is neither "/hello" nor "/bye", set the status code to 404 (Not Found)
    response.statusCode = 404;
    // End the response and send "not found" back to the client
    response.end("not found");
  }
});
