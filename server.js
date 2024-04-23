import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
    {id: 1, name: "Vikram Singh"},
    {id: 2, name: "Aditya Singh"},
    {id: 3, name: "Pratap Singh"}
];

const server = createServer((req, res) => {
    if(req.url === "/api/users" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});