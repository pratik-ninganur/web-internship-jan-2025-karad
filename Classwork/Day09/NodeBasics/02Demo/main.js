var someExportedObject=     require('./calc')

console.log(someExportedObject);

var result1 = someExportedObject.Addition(10,20);
console.log(result1);

var result2 = someExportedObject.Sub(10,20);
console.log(result2);

var result3 = someExportedObject.Mult(10,20);
console.log(result3);
