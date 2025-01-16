
console.log("Hello Node");

//var v = document.getElementById("txtName");

var v = 100;
console.log(typeof(v))

v ="abcd";
console.log(typeof(v))

v= true;
console.log(typeof(v))

v = null;
console.log(typeof(v))

v = undefined;
console.log(typeof(v))

console.log("------------------------------")
var v = 100;

if(v > 200)
{
console.log("v is bigger")
}
else
{
console.log("v is smaller than 200 ")
}


console.log("------------------------------")

for(i=0; i< v; i++)
{
    console.log(i);
    if(i == 10)
    {
        break;
    }
}
