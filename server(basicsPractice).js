import http from 'http';
import fs from "fs/promises";
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log("File Name: ", __filename);
// console.log("Directory Name: ", __dirname);

const server = http.createServer (async(req, res) => {
    // res.setHeader("Content-Type", "text/plain");

    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;

    // console.log(req.url);
    // console.log(req.method);

    // res.writeHead(200, { "Content-Type": "text/html" })
    // res.end("<h1>Hello from nodejs server</h1>");

    // try {
    //     if(req.method === "GET") {
    //         if (req.url === "/") {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end("<h1>NodeJS Server Home Page</h1>");
    //         }
    //         else if (req.url === "/about") {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end("<h1>NodeJS Server About Page</h1>");
    //         }
    //         else {
    //             res.writeHead(404, { "Content-Type": "text/html" });
    //             res.end("<h1>404 - Page Not Found</h1>");
    //         }
    //     }
    //     else {
    //         throw new Error("Method not allowed.");
    //     }
    // }
    // catch (error) {
    //     res.writeHead(500, { "Content-Type": "text/plain" });
    //     res.end("Server Error")
    // }

    try {
        if(req.method === "GET") {
            let filePath;
            if (req.url === "/") {
                filePath = path.join(__dirname, "public", "index.html");
            }
            else if (req.url === "/about") {
                filePath = path.join(__dirname, "public", "about.html");
            }
            else {
                throw new Error("404 - Not Found");
            }
            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
        }
        else {
            throw new Error("Method not allowed.");
        }
    }
    catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error")
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});