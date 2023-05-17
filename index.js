let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
    var parseUrl = url.parse(req.url, true);
    var queryStringObject = parseUrl.query;
    res.end('Hello Node Js');
    console.log(queryStringObject);
})

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})