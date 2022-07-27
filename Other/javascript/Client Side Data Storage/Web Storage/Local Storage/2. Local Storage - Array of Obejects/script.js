window.onload = function () {

var person = {
    name: 'inferno',
    lastname: 'darkness',
    country: 'GR'
};

// JSON.stringify() -> serialize the object into string

localStorage.setItem('personOBj', JSON.stringify(person));

var persons = [
    person,
    person,
    person,
    person,
    person
];

localStorage.setItem('persons', JSON.stringify(persons));

var personStr = localStorage.getItem('personObj');

console.log(JSON.parse(personStr));

var personsStr = localStorage.getItem('persons');

console.log(JSON.parse(personsStr));
};
