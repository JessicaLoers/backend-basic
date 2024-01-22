// Import the server from the server.js file
import { server } from "./server.js";

// Define the port number on which the server will listen
const port = 8000;

// Start the server listening on port 8000
server.listen(8000, () => {
  /* This callback function is executed once the server starts successfully.
  It logs a message to the console (terminal not the browser) indicating that the
  server is running and displays the URL where it can be accessed
  */
  console.log(`Server running at http://localhost:${port}/`);
});
