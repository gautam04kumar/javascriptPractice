//## Create an object called person with properties name, age, and city.
// # Define a method sayHello() inside the person object that prints a greeting message including the person's name.
// Implement a method changeCity(newCity) for the person object that updates the person's city.
let person = {
    name: "gautam",
    age: 22,
    city: "ranchi",
    sayHello: () => {
        return (`Namste, i am ${person.name} from ${person.city}`)
    },
    changeCity:(newCity)=>{
       return person.city=newCity
    }

}

let result = person.sayHello()
console.log(result)
console.log("before change:-",person.city)

let cityChanged = person.changeCity("Patna")
console.log("after changed:-",cityChanged)

// Create another object called book with properties title, author, and year.
// Write a function getBookInfo() that takes a book object as a parameter and returns a formatted string with the book's information.

let book={
    title:"my life",
    author:"Kumar",
    year:2024,
 
}

let getBookInfo=(book)=>{
    return (`${book.title} by ${book.author} published in ${book.year}`)
 }
let bookInfo=getBookInfo(book)
console.log(bookInfo)

// Define a constructor function Car(make, model, year) that initializes a car object with properties make, model, and year.

function Car(make, model, year){
    this.make=make,
    this.model=model,
    this.year=year
}

// Add a method start() to the Car prototype that prints a message indicating the car has started.

Car.prototype.start=()=>{
    return console.log("car has started ");
}


let obj= new Car("scropio","ns","2022")
console.log(obj)

 obj.start();

//# Create an object employee with properties name, position, and salary.
//## Write a function increaseSalary(employee, amount) that increases the salary of the given employee object by the specified amount.
let employee={
    name:"gautam",
    position:"front-end devloper",
    salary:30000
}

let increaseSalary=(employee,amount)=>{
    return employee.salary +=amount
}

increaseSalary(employee,5000)
console.log(employee.salary)












