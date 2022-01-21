let clone1 = {
    name: 'Rick',
    age: 77,
    country: 'FR',
}

let clone2 = {
    name: 'Rick',
    age: 78,
    country: 'FR',
}

Object.assign(clone1, person)
Object.assign(clone2, person)
let samePerson = person
person.age += 1
person.country = 'FR'