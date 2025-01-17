
const mysql = require('mysql2');

var connection = mysql.createConnection({
                            host     : 'localhost',
                            user     : 'root',
                            password : 'manager',
                            database : 'myDatabase'
                        });

connection.query("select * from emp",(error,result)=>{
                        if(error==null)
                        {
                          var data =    
                            JSON.stringify(result);
                         console.log(data);
                         connection.end();
                        }
                        else
                        {
                            var errdata =    
                            JSON.stringify(error);
                            console.log(errdata);
                            connection.end();
                        }
                    })