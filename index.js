const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json); // return object from json string file

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id; // format everything from url to object with key:value syntax, id is specific case

  // ROUTING
  if (pathName === "/products" || pathName === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is the response!");
  } else if (pathName === "/laptop" && id < laptopData.length) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`This is the response ${id}!`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("URL is not on the server!");
  }
});
server.listen(1335, "127.0.0.1", () => {});
