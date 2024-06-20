// Define the Person class (SUPER CLASS)
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("Lupe", "Argumedo");
console.log(person.getFullName());

// Define the Employee class that extends the Person class
class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
getGrossPay(hoursWorked) {
    return hoursWorked * this.payRate;
}
}

let employee1 = new Employee("John", "Doe", 1, "Developer", 40.0);
let employee2 = new Employee("Jane", "Smith", 2, "Developer", 40.0);

console.log( employee1.getFullName());
console.log( employee2.getFullName());

let employee3 = new Employee("James", "Williams", 3, "Developer", 45.0);
let employee4 = new Employee("Henry", "Jones", 4, "Developer", 50.0);

console.log(`${employee3.getFullName()}- $${employee3.getGrossPay(40)}.`);
console.log(`${employee4.getFullName()}- $${employee4.getGrossPay(40)}.`);