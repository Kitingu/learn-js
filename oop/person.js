// prototypal inheritance
// protype fuctions are accessible to all instances of the class i.e methods
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}


const kasee = new Person('charles', 'mwendwa', 13)
const me = new Person('benedict', 'mwendwa', 25, ['watching','dancing'])
me.setName('stephen kitingu')
console.log(me.getBio())

console.log(kasee.getBio())