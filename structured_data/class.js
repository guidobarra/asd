class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    markLate() {
        this.tardies += 1
        if(this.tardies>=3) {
            return "YOU ARE EXPELLED"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScore(score) {
        this.scores.push(score)
        return this.scores
    }

    calculateAvarage() {
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }

    static enrollStudent() {
        return "ENROLLING STUDENTS"
    }
}

let firstStudent = new Student("Albert","Barra")
let secondStudent = new Student("Lucia","Smith")
let kitty = new Student("Kitty","Oracle",2) 
firstStudent.grade = 23
secondStudent.grade = 2
console.log(kitty)
console.log(secondStudent)
console.log(firstStudent)
console.log(kitty.fullName())
console.log(kitty.markLate())
console.log(kitty.markLate())
console.log(kitty.markLate())

console.log(kitty.addScore(2))
console.log(kitty.addScore(33))
console.log(kitty.addScore(23))
console.log(kitty.calculateAvarage())
console.log(Student.enrollStudent())