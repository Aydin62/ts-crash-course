"use strict";
/* In the style of "JavaScript: Functional Programming for JavaScript Developers," Packt Publishing, 2016 */
let say = console.log;
/* Basic Types */
let id = 5;
say('ID: ', id);
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = true;
/* Arrays */
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hi'];
/* Tuples */
let person = [1, 'Brad', true];
/* Tuple Arrays */
let employees;
employees = [
    [1, 'Margaret'],
    [2, 'John'],
    [3, 'Kate']
];
/* Unions */
let pid = 22;
pid = 'rc3';
/* Enums */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 94] = "Up";
    Direction1[Direction1["Down"] = 95] = "Down";
    Direction1[Direction1["Left"] = 96] = "Left";
    Direction1[Direction1["Right"] = 97] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
say(Direction1.Left);
say(Direction2.Right);
let user = {
    id: 1,
    name: 'Harry',
};
user.id = 3;
say('user id = ', user.id.toString());
/* Type Assertions */
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
/* Functions */
function addNum(x, y) {
    return x + y;
}
say(addNum(3, 4));
/* Voids */
function log(message) {
    say(message);
}
log(2);
log('bye');
const user1 = {
    id: 1,
    name: 'Harry',
};
user1.name = "Max";
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes are used to create (multiple) objects.
class Person {
    constructor(id, name) {
        // Constructor is a method
        say('Constructing a person...');
        this.id = id;
        this.name = name;
        say(this.id, this.name);
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(5000, 'Brad');
const mike = new Person(6000, 'Mike');
// Now the person objects themselves:
say(brad, mike);
say(brad.register());
/* Subclasses */
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // initializing from the superclass Person
        this.position = position;
    }
}
const emp = new Employee(7000, 'Rita', 'Developer');
say(emp);
say(emp.register());
/* Generics */
// The generic T here acts like a placeholder for type:
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['a', 'b', 'c']);
say(numArray, '\n', strArray);
