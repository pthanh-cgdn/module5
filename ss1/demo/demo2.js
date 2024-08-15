const sum = (...a)=>{
    let temp =0;
    for(let i of a){
        temp+=i
    }
    return temp
}

let arr1=[1,2,4]
let arr2=[3,5,7]
let arr3=[...arr1,...arr2]
let[a,b,...c]=arr3
console.log(c);

console.log(sum(1,2,3))
const obj={
    id:1,
    name:"HaiTT"
}
const obj0={
    id:2,
    address:"QN"
}
const obj1={...obj,...obj0}
let {id,name:userName}=obj1
console.log(userName);

