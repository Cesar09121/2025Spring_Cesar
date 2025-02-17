

var http = require('http');

const PORT = 3000; 


const server = http.createServer((request, response) => {
    response.statusCode = 200, {'Content-Type': 'text/plain'};
    response.end('Hello, World!\n');
});
/*same thing */
/*const server = http.createServer(function handler(request, response){
    response.statusCode = 200, {'Content-Type': 'text/plain'};
    response.end('Hello, World!\n');
});*/


const square = (x) => x * x;  /** Arrow function with parameter x and doesn't have to have return */
/*const square(x)=>{
    return x * x; 
}*/



// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


console.log("Hello, World!");