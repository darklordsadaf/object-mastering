var name = "Ron";

function add(num1, num2){
    var result = num1 + num2;
    console.log("name inside", name);
    function double(num){
        const double = num * 2;
        return double;
    }
    var total = double(result);
    return total;
}

console.log("name outside", name);
var sum = add(10, 3);
console.log(sum);