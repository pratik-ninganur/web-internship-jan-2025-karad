const http =  require('http');

// console.log(http);
 
const server =  
        http.createServer((request, response)=>
        {
            console.log("Request Received for: " + 
                request.url);
            console.log("responding back.....");
            
           if(request.url =="/users")
           {
            response.write("Hello Users");
           }
           else if(request.url =="/customers")
           {
            response.write("Hello Customers");
           }
           else{
            response.write("Just Hello!!");
           }
            response.end();
        });

server.listen(9898,()=>{
                            console.log("Server Started Listening on 9898");
                        });