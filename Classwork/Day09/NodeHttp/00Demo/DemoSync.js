const fs =  require('fs');

console.log("Start....")

var data = fs.readFileSync("ReadMe.txt");
console.log(String(data));

console.log("End....")