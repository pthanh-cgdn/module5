
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
arr=[1,2,3]
console.log(arr)
console.log(...arr)
console.log(sum(...arr))