const http = require('http');

// console.log(http);
 
const server =  
        http.createServer((request, response)=>
        {
            console.log("Request Received for: " + 
                request.url);
            console.log("responding back.....");
            
            response.write("Hello from Node Server");
            response.end();
        });

server.listen(9898,()=>{
                            console.log("Server Started Listening on 9898");
                        });