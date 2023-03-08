const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html;charset=UTF-8'})
    res.end('<h1>Hello Node!!!!</h1>\n');
})
const port=process.env.PORT||3000;
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
   
})