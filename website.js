const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3020;      // Fetch the port of environment or set it to 3020

const server = http.createServer((req, res)=>{
    // console.log(req);
    console.log(req.url);
    res.setHeader = ('Content-Type', 'text/html');
    if(req.url == "/project"){
        res.statusCode = 200;
        res.end('<h1>Hi, This is Abdullah</h1> <p> I am a cool programmer </p>');
    }else if(req.url == "/about"){
        res.statusCode = 200;
        res.end(`<h1>This is about page Bro</h1>`)
    }else if(req.url == "/"){
        res.statusCode = 200;
        const data = fs.readFileSync("./webProject/index.html");
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end("Page not found Yup");
    }
    
})

// We must have to listen to the server

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})


// You can run this server on nodemon using "nodemon '.\website.js'"