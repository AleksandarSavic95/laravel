/**
* razlika između nizova i json objekata - napraviti json objekat i niz json objekata
 */

console.log("~~~~ JS arrays ~~~~");

var o = {a:5, b:6};
var arro = [{a:5}, {b:6}];

console.log(o);
console.log(arro);

// U JSu, sve je objekat, pa tako i niz (Array).
// Zato možemo dodjeljivati custom atribute nizu, kao bilo kom objektu.
// Razlikuje se od Object-a po prototipu, koji sadrži metode za rad sa nizom:
// - push i pop, slice i sPlice
// - filter, find, findIndex
// - length (property)