console.log(add(6,9))
function add(a,b){
    return a+b
}
let obj = {
    a: 5,
    b(){
        console.log(this.a, this)
    },
    c:()=>{
        console.log(this.a,this)
    }
}
let arr = [1,3,5,7]
arr.forEach(function (value, index){
    console.log(value)
})

// gap doi cac phan tu trong mang va tra ve mang moi
const newArr = arr.map((value,index)=>value*2)
console.log(newArr)

// gap doi cac phan tu o vi tri le
const newArr1 = arr.map((value,index) => index%2===1? value*2 : value )
console.log(newArr1)

//filter
const newArr2 = arr.filter((value,index)=> index%2!==0)
console.log(newArr2)

//reduce
const sum=arr.reduce((temp,currentValue)=>temp+currentValue);
console.log(sum)
//max
const max=arr.reduce((temp,currentValue)=> temp<currentValue? currentValue: temp);
console.log(max)