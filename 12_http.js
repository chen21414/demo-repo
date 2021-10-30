const http = require('http');

//web server keep on listening the request, open localhost:5000
const server = http.createServer((req,res)=>{
    if(req.url === '/home'){ //if my request to url needs to go to about page (/about)
        res.end('Welcome to our home page') //cheat: can have them at the end
    }

    if(req.url === '/about'){
        res.end('Here is the brief history')
    }

    res.end(`
        <p>can't find the page<p/>
    `)
})

server.listen(5000)