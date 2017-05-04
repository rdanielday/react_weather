var names = ["Bob", "Cathy", "Jim"]
//
// names.forEach(function (name) {
//   console.log("forEach", name);
// });
//
// names.forEach((name) => {
//   console.log("arrowFunc", name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + "!";
//
// console.log(returnMe("Ryan"));
//
// var person = {
//   name: "Ryan",
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + " says hi to " + name)
//     });
//   }
// }
//
// person.greet();

function add(a, b) {
  return a + b;
}

var addExpression = (a, b) => {
  return a+b;
}

var addStatement = (a, b) => a + b;

console.log(add(3, 6));
console.log(addStatement(2, 4));
console.log(addExpression(1, 3));
