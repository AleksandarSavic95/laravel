/**
* razlika između nizova i json objekata - napraviti json objekat i niz json objekata /// U drugom fajlu!
* napraviti klasu Person (es5) sa first name, last name i gender varijablama i instancirati objekat
* implementirati nasledjivanje klase Person (es5)
* postaviti statičke varijable i metode u klasu Person (es5)
* javascript promises and callbacks /// U trecem fajlu (promises-callbacks.js)
* Commit to git :)
 */

console.log("~~~~ JS classes ~~~~");

function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    this.sayHi = function() {
        console.log("I am " + this.firstName + " " + this.lastName + " - " + this.gender);
    }
}

// static prop
Person.type = 'human';
// static func
Person.greet = function () {
    console.log('A person says hi!');
}


// Nasljedjivanje //

function Student(firstName, lastName, gender, faculty) {
    Person.call(this, firstName, lastName, gender);
    this.faculty = faculty;
}
// copying prototype of the parent class
Student.prototype = Object.create(Person.prototype);
// return the constructor prop back to the class itself
Student.prototype.constructor = Student;

var p = new Person('Mika', 'Antic', 'male');
var s = new Student('Aleksandar', 'Savic', 'male', 'FTN');

p.sayHi();
s.sayHi();

/**
 * Think of f = new Foo(); as creating a class instance,
 * Foo.prototype.bar = function(){...} as defining a shared method for the class, and
 * Foo.baz = function(){...} as defining a public static method for the class.
 */


console.log("~~~~ / JS classes ~~~~");