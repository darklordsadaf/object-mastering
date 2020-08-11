const normalPerson = {
    firstName: "Ron",
    lastName: "Dash",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Ronald",
    lastName: "Mac",
    salary: 25000
}

const zeroPerson = {
    firstName: "Tom",
    lastName: "Holland",
    salary: 27000
}


const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroPersonChargeBill(2000);
console.log(heroPerson.salary);

const zeroPersonChargeBill = normalPerson.chargeBill.bind(zeroPerson);
zeroPersonChargeBill(10000);
console.log(zeroPerson.salary);



normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);
// console.log(normalPerson.firstName);