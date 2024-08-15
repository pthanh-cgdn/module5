let fibonacci = function (num){
    if(num<0 || isNaN(num)){
        return "invalid"
    } else if (num < 2){
        return 1
    } else {
        return fibonacci(num-1) + fibonacci(num-2)
    }
}
let sum = 0;
let arr = [];
const N = 10
for (let i=0; i < N ; i++){
    arr.push(fibonacci(i))
}
sum = arr.reduce((temp,currentValue)=>temp+currentValue)
console.log(sum)