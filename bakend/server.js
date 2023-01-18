const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('request has been made from the server');
    res.setHeader('Content-Type','text/plain');
    res.write("heloo  kiran welcome to backennd");
res.statusCode=404
res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000')
})