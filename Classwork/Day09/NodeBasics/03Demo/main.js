var someExportedObject=     require('./calc')

console.log(someExportedObject);

var result1 = someExportedObject.Add(10,20);
console.log(result1);

var result2 = someExportedObject.Sub(10,20);
console.log(result2);

var result3 = someExportedObject.Mult(10,20);
console.log(result3);

console.log(someExportedObject.pi);

var obj = 
    new someExportedObject.Person(1,"mahesh","pune");
obj.print();


someExportedObject.emp.GetDetails();

