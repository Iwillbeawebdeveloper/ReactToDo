//function add (a, b) {
//    return a + b;
//}
//
//console.log(add(3,1));
//
//var toAdd = [9, 1];
//console.log(add(...toAdd));

//var groupA = ['James', 'Jessica'];
//var groupB = ['Paul'];
//var final = [...groupB, 3, ...groupA];
//
//console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
    console.log("Hi " + name + ", you are " + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'James'];
final.forEach(function(name) {
    console.log("hi " + name);
});
