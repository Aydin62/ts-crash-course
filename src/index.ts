/* In the style of "JavaScript: Functional Programming for JavaScript Developers," Packt Publishing, 2016 */
let say: Function = console.log

/* Basic Types */
let id: number = 5
say('ID: ', id)
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
x = true

/* Arrays */
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hi']

/* Tuples */
let person: [number, string, boolean] = [1, 'Brad', true]

/* Tuple Arrays */
let employees: [number, string][]
employees = [
	[1, 'Margaret'],
	[2, 'John'],
	[3, 'Kate']
]

/* Unions */
let pid: string | number = 22
pid = 'rc3'

/* Enums */
enum Direction1 {
	Up = 94,
	Down,
	Left,
	Right,
}
enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}
say(Direction1.Left)
say(Direction2.Right)

/* Objects */
type User = {
	id: number,
	readonly name: string,  // read-only property
	age?: number,  // optional property
}
let user: User = {
	id: 1,
	name: 'Harry',
}
user.id = 3
say('user id = ', user.id.toString())

/* Type Assertions */
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

/* Functions */
function addNum(x: number, y: number): number {
	return x + y
}
say(addNum(3,4))

/* Voids */
function log(message: string | number): void {
	say(message)
}
log(2)
log('bye')

/* Interfaces */
interface UserInterface {
	readonly id: number,
	name: string,
	age?: number,
}
const user1: UserInterface = {
	id: 1,
	name: 'Harry',
}
user1.name = "Max"
/* There are some differences between Type and Interface.
For example, a type can be used with primitives and with unions: */
type Point = number | string
const p1: Point = 1
// ... but this does NOT work with interfaces!
/* We can also use interfaces with functions: */
interface MathFunc {
	(x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

/* Classes */
/* Firstly, an interface for the class Person:
(this makes the code more robust) */
interface PersonInterface {
	id: number
	name: string
	age?: number
	register(): string
}
// Classes are used to create (multiple) objects.
class Person implements PersonInterface {
	id: number
	name: string

	constructor(id: number, name: string) {
		// Constructor is a method
		say('Constructing a person...')
		this.id = id
		this.name = name
		say(this.id, this.name)
	}

	register() {
		return `${this.name} is now registered.`
	}
}
const brad = new Person(5000, 'Brad')
const mike = new Person(6000, 'Mike')
// Now the person objects themselves:
say(brad, mike)
say(brad.register())

/* Subclasses */
class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name) // initializing from the superclass Person
		this.position = position
	}
}
const emp = new Employee(7000, 'Rita', 'Developer')
say(emp)
say(emp.register())

/* Generics */
// The generic T here acts like a placeholder for type:
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a', 'b', 'c'])
say(numArray, '\n', strArray)