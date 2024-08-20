//btap1: mang bao gom cac so lon hon 5
let arr = [1,2,3,5,0,6,7,8,19,10]
let newArr1 = arr.filter(value=>value>5)
console.log(newArr1)

//btap2: tinh tong cac ptu trong mang
let sum1 = arr.reduce((temp,currentValue)=>currentValue+temp)
console.log(sum1)

//btap3:ktra 1 mang co chua so V hay khong neu co tra ve V neu khong tra ve khong co
let contain=(arr,num) => (arr.reduce((temp,currentValue)=>currentValue===num? temp+num:temp,0)===0?"Not found":num)
console.log(contain(arr,4))

//btap4:ktra 1 mang, tat ca cac phan tu co lon hon 0 khong?
let isPositive=(arr) => (arr.reduce((temp, currentValue) => currentValue <= 0 ? temp += 1 : temp, 0) === 0)
console.log(isPositive(arr))

//btap5: 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let firstNum = (arr,num) => arr.filter(value => value>num).length > 0 ? arr.filter(value=>value>num)[0]: "Not found"
console.log(firstNum(arr,100))

//6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

let [first,...rest]=arr;
console.log(first)
console.log(rest)

//7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person={
    name:'HaiTT',
    age:'30',
    address:'QN'
}

let {name:userName,age:userAge} = person
console.log(userName);

//8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

//9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

function hello(...names){
    return names.reduce((total,name)=>total+", "+name, "Welcome")
}

console.log(hello('Thanh', 'Hieu', 'Ky', 'Quang'))

//10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

let book = {
    title:'De men phieu luu ky',
    author:'To Hoai',
    pages:'198',
    displayInfor: function (){
        return 'Bookname '+ this.title + '; author ' + this.author + '; pages ' + this.pages
    }

}
console.log(book.displayInfor())

import React from 'react';
import useToggle from './useToggle';

function ToggleComponent() {
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            <p>{isToggled ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default ToggleComponent;
