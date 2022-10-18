const express = require("express"); //importing express
console.log("Hi Express");
//creating app object
const app = express(); //this express function returns app object
//creating seprate variable for port.
const port = 5555; 
const middleware1 = (req, res, next) => {
    console.log("middleware1")
    next()
  }
  const middleware2 = (req, res, next) => {
    console.log("middleware2")
    next()
  }
  app.use(middleware1)
  app.get('/', (req, res) => {
      res.send(
        "<h2>Hello middleware <br/> The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.</h2>")
  })
  
  app.get('/home', (req, res) => {
      res.send('<h1>Home Page</h1>')
  })
  
  app.get('/login', middleware2, (req, res) => {
      res.write('<h1>Logged in<h1>')
  })
  
  app.get('/about', middleware2, (req, res) => {
      res.send('<h1>Prepbytes</h1>')
  })
  
  app.listen(port)//used variable name for port
