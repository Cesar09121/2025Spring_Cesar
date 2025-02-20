
/*
var http = require('http');

const PORT = 3000; 


/*const server = http.createServer((request, response) => {
    response.statusCode = 200, {'Content-Type': 'text/plain'};
    response.end('Hello, World!\n');
});*/
/*same thing 
const server = http.createServer(function handler(request, response){
    response.statusCode = 200, {'Content-Type': 'text/plain'};
    response.end('Hello, World!\n');
});


const square = (x) => x * x;  /** Arrow function with parameter x and doesn't have to have return */
/*const square(x)=>{
    return x * x; 
}*/



// Start the server and listen on the specified port
/*server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


console.log("Hello, World!");*/






/*  B"H
*/
// Load the http module to create an http server.
const http = require('http')
const PORT = 8000

//const app= express();



// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});

// Listen on port 8000, IP defaults to
//
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});



console.log('Hello World!');
