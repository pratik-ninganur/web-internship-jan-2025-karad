const fs =  require('fs');

console.log("Start....")

fs.readFile("ReadMe.txt",(error, data)=>
                            {
                                if(error==null)
                                {
                                    console.log(String(data));
                                }
                            });


console.log("End....")