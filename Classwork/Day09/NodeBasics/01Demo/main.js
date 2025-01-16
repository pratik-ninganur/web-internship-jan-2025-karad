var someExportedObject=     require('./calc')

console.log(someExportedObject);

var result = someExportedObject.Addition(10,20);
console.log(result);

var result1 = someExportedObject.Sub(10,20);
console.log(result1);
