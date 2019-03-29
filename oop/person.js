
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

// inheritance in js or sub classes

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }

    getYearsLeft(){
        return 65 - this.age
    }
}


const kasee = new Person('charles', 'mwendwa', 13)
const me = new Employee('benedict', 'mwendwa', 25, 'Teacher', ['watching', 'dancing'])
me.setName('stephen kitingu')
console.log(me.getBio())
console.log(me.getYearsLeft())

console.log(kasee.getBio())