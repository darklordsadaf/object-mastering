/**----------------- apply -----------------*/
const normalPerson = {
    firstName: "Ron",
    lastName: "Dash",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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

normalPerson.chargeBill.apply(heroPerson, [1000, 100, 10]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);

console.log(normalPerson.salary);



/**------------------ call -----------------------*/
// const normalPerson = {
//     firstName: "Ron",
//     lastName: "Dash",
//     salary: 15000,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount, tips, tax){
//         console.log(this);
//         this.salary = this.salary - amount - tips - tax;
//         return this.salary;
//     }
// }

// const heroPerson = {
//     firstName: "Ronald",
//     lastName: "Mac",
//     salary: 25000
// }

// const zeroPerson = {
//     firstName: "Tom",
//     lastName: "Holland",
//     salary: 27000
// }

// normalPerson.chargeBill.call(heroPerson, 5000, 500, 50);
// normalPerson.chargeBill.call(heroPerson, 2000, 200, 20);
// console.log(heroPerson.salary);

// console.log(normalPerson.salary);







/**------------- bind -------------------------*/
// const normalPerson = {
//     firstName: "Ron",
//     lastName: "Dash",
//     salary: 15000,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         console.log(this);
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }

// const heroPerson = {
//     firstName: "Ronald",
//     lastName: "Mac",
//     salary: 25000
// }

// const zeroPerson = {
//     firstName: "Tom",
//     lastName: "Holland",
//     salary: 27000
// }


// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonChargeBill(2000);
// console.log(heroPerson.salary);

// const zeroPersonChargeBill = normalPerson.chargeBill.bind(zeroPerson);
// zeroPersonChargeBill(10000);
// console.log(zeroPerson.salary);



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);
// // console.log(normalPerson.firstName);