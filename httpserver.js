const http = require("http");

const port = process.env.PORT || 3020;      // Fetch the port of environment or set it to 3020

const server = http.createServer((req, res)=>{
    // console.log(req);
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    res.end('<h1>Hi, This is Abdullah</h1> <p> I am a cool programmer </p>');
})

// We must have to listen to the server

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})