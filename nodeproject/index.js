
// const fs=require("fs");
// const path=require("path")
// const http=require("http");

// const myServer=http.createServer((req,res)=>{

//     const myServer = http.createServer((req, res) => {
//         fs.readFile("./index.html", "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal Server Error');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
   
  
// });
// myServer.listen(8080 ,()=>console.log("server started"));


// const fs = require("fs");
// const http = require("http");

// const myServer = http.createServer((req, res) => {
//     fs.readFile("./index.html", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });

//     fs.readFile("./about.html", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });


//     fs.readFile("./404.html", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });


//     fs.readFile("./contact-me.html", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });

    
// });

// myServer.listen(8080, () => console.log("Server started at http://localhost:8080"));

const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req, res) => {
    let filePath;

    if (req.url === "/") {
        filePath = "./index.html";
    } else if (req.url === "/about") {
        filePath = "./about.html";
    } else if (req.url === "/contact") {
        filePath = "./contact-me.html";
    } else {
        filePath = "./404.html";
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const port = 8080;
myServer.listen(port, () => console.log(`Server started at http://localhost:${port}`));

