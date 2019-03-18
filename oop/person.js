const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
const kasee = new Person('charles','mwendwa',13)
const me = new Person('benedict','mwendwa',25)
me.lastName = 'kitingu'
console.log(me)
console.log(kasee)