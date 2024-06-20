class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
  // The displayIntro() method
  displayIntro() {
    console.log(
      "Hi! I'm " +
        this.firstName +
        " " +
        this.lastName +
        " and I am a " +
        this.jobTitle
    );
  }
  fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a new Employee object
let personalDetails = new Employee(28, "Guadalupe", "Argumedo", "Year Up student", 0);
//personalDetails.displayIntro();

//Resuability
//Definition: Classes allow you to define blueprints for objects that can be reused to create multiple instances with similar properties and methods.
// Benefit: This promotes code reuse, reducing redundancy and making it easier to maintain and update the code.
// Defines the blueprint for a Course object
class Course {
  // The constructor method is called when a new instance of Course is created.
  // It initializes the properties of the Course object with the given values.
  constructor(_id, _name, _price) {
    this.id = _id;     // Assigns the given id to the id property of the Course object
    this.name = _name; // Assigns the given name to the name property of the Course object
    this.price = _price; // Assigns the given price to the price property of the Course object
  }
 
  //Define function without the keyword Function ...and it only works on the courses object that you have created.
  displayInformation() {
    console.log("Course: " + this.name + " - Price: $" + this.price);
  }
  //Create a function that display the course name  + the course price including $ sign
  namePrice() {
  console.log("Course: " + this.name + " - Price: $" + this.price);
  }
}

//course1= is a unique name
let course1 = new Course(1, "JavaScript Fundamentals", 300);

let course2 = {
  id:1,
  coursename: "JavaScript Advance"
}

let course3 = new Course(3, "APIs", 250);
//console.log(course3)


let employee1 = new Employee("1", "Ezra", "Aiden", "Theater Teacher", 38.46);
let employee2 = new Employee("2", "Elisha", "Aslan", "Game Programmer", 43.27);

//employee1.displayIntro();
//employee2.displayIntro();

//console.log(employee2.fullname());

// Define the Person class (SUPER CLASS)
class Person {
  constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
  }
  getFullName() {
      return `${this.firstName} ${this.lastName}`;
  }
  introduce() {
      return `Hello, my name is ${this.getFullName()}.`;
  }
  introduceMe() {
    return `Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
}
}
// Define the Student class that extends the Person class
class Student extends Person {
  constructor(firstName, lastName, age, gender, studentId, course) {
      super(firstName, lastName, age, gender);
      this.studentId = studentId;
      this.course = course;
  }
  introduce() {
      return `${super.introduce()} I am a student enrolled in the ${this.course} course.`;
  }
  getStudentInfo() {
      return `Student ID: ${this.studentId}, Course: ${this.course}`;
  }
  introduceMe() {
    return `Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
}
}
// Example usage
const person1 = new Person('Jane', 'Smith', 30, 'Female');
console.log(person1.introduceMe()); // Output: Hello, my name is Jane Smith.

const student1 = new Student('John', 'Doe', 20, 'Male', 'S12345', 'Computer Science');
console.log(student1.introduceMe()); // Output: Hello, my name is John Doe. I am a student enrolled in the Computer Science

//console.log(student1.getStudentInfo()); // Output: Student ID: S12345, Course: Computer Science