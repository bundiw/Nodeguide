const http = require('http')
const port=2600
http.createServer((req,res)=>{
    console.log(req);
        res.statusCode=200
    res.write("Never give up");
    //res.statusCode=304


    res.end()
}).listen(port)