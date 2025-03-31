/*  B"H
*/
// Load the http module to create an http server.
const express = require('express')
const productsController = require('./controllers/products')

const PORT = 8000

const app = express();

app
  .get('/', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/products', productsController)

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')



/*
Asynchronous partterns in Node .js
1. Callbacks
2. Pipelines
3. Promises
4. Async/Await
/*
Ways to send data to the server
1. Querry parameters : ?name=John&age=30
2. URL parameters : /products/123
3. Request body : { "name": "John", "age": 30 }
  3.0. Form data: name=John&age=30
  3.5. JSON data: { "name": "John", "age": 30 }
4. Headers
  4.5. Cookies

*/

/*
parts of a URL
1. Protocol: http:// or https://
2. Domain: www.example.com
3. Port: :8000
4. Path: /path/tpo/resource
5. Querry parameters: ?name=John&age=30
6. Fragment: #section1

example: https://www.example.com:8000/path/to/resource?name=John&age=30#section1
*/

/*
Module Types
1. CommonJS: 
import: require('module')
export: module.exports = { functions, variables }
2. ES6:
import: import { function, variable} from 'module'
export: export { function, variable }

*/
