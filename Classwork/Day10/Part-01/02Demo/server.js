const http = require('http');
const mysql = require('mysql2');


var connection = mysql.createConnection({
                  host     : 'localhost',
                  user     : 'root',
                  password : 'manager',
                  database : 'myDatabase'
                });


var server = http.createServer((request, response)=>
{
  response.setHeader("Access-Control-Allow-Origin",
                     "*")
  if(request.url == "/emps")
  {
    console.log("request received");
    connection.query("select * from Emp",
                    (error,result)=>
                    {
                      if(error==null)
                      {
                        console.log("Inside Result");
                        var data =    
                          JSON.stringify(result);
                      //console.log(data);
                      response.setHeader("content-type","application/json");
                      response.write(data);
                      connection.end();
                      response.end();
                      }
                      else
                      {
                        console.log("* "+error);
                          var errdata =    
                          JSON.stringify(error);
                          //console.log(errdata);
                          response.write(errdata)
                          connection.end();
                          response.end();
                      }
                  });
  }
  else
  {
    response.write("No Data");
    response.end();
  }
})

server.listen(9898, ()=>{console.log("Server started..")});


