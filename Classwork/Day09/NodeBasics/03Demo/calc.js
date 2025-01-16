function Add(x, y)
{
    return x+y;
}

function Sub(x, y)
{
    return x-y;
}

function Mult(x, y)
{
    return x*y;
}

const pi = 3.14;

//Class Syntax
class Person
{
   constructor(no, name, address)
   {
    this.No = no;
    this.Name = name;
    this.Address=  address;
   }

   print()
   {
    console.log(this.No + this.Name + this.Address)
   }

}

//Contructor Function Syntax
var Emp = function(no, dept)
            {
                this.No = no;
                this.Dept = dept;
                this.GetDetails = function()
                {
                    console.log("Emp Details " + this.No + this.Dept);
                }
            }

var emp = new Emp(10, "IT");

module.exports = {Add, Sub,Mult, pi, Person,emp}