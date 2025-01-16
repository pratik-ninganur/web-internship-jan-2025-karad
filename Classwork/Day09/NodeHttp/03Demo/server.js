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
            response.setHeader("content-type",
                                "text/html")
            response.write(`<html>
                                <head>
                                    <title>
                                        About Users
                                    </title>
                                </head>
                                <body>
                                    <h1>
                                      Hello Users
                                    </h1>
                                </body>
                            </html>`);
            
           }
           else if(request.url =="/customers")
           {
            response.setHeader("content-type",
                                "application/json");
            response.write(`[
                              {"No":1, "Name":"Nilesh"},
                              {"No":2, "Name":"Shailesh"},
                              {"No":3, "Name":"Ramesh"}
                            ]`);
           }
           else
           {
            response.setHeader("content-type",
                                "text/plain");
            response.write("Just Hello!!");
           }
            response.end();
        });

server.listen(9898,()=>{
                            console.log("Server Started Listening on 9898");
                        });