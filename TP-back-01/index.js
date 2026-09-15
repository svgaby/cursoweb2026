const http = require("http");

http
.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/html" });
    res.write(" Respuesta de mi servidor")
    res.end();
    console.log(req.url)
})
.listen(4000)

console.log("servidor activo en hhtp://localhost:4000");  // web, local, ip puedo ir por aca
