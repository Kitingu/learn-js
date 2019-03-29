// prototypal inheritance
// protype fuctions are accessible to all instances of the class i.e methods

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}



const kasee = new Person('charles', 'mwendwa', 13)
const me = new Person('benedict', 'mwendwa', 25, ['watching', 'dancing'])
me.setName('stephen kitingu')
console.log(me.getBio())

console.log(kasee.getBio())