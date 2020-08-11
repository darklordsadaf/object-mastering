

class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.changeBill = function(amount, tips, tax){
            // console.log(this);
            this.salary = this.salary - amount - tips - tax;
            return this.salary;
        }
    }
}



const heroPerson = new Person("Ronald", "Mac", 25000);
heroPerson.changeBill(3000, 300, 30);
console.log(heroPerson.salary);


const zeroPerson = new Person("Ron", "Dash", 27000);
zeroPerson.changeBill(3000, 300, 30);
zeroPerson.changeBill(5000, 500, 50);
console.log(zeroPerson.salary);