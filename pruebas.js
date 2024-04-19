class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let jjosu = new User('jjosu', 19)

console.log(jjosu.sayHello());

let users = {
    name: 'jjosu',
    getUser: function () {
        return this.name
    }
}

console.log(users.getUser())