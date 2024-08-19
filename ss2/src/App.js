import logo from './logo.svg';
import './App.css';
import React from "react";
import StudentList from "./component/student/StudentList";

function App() {
    const id = "co324h1"

    const students = [
        {
            id: 1,
            name: 'HaiTT',
            address: 'Quang Nam',
            point: 9
        },
        {
            id: 2,
            name: 'HieuTT',
            address: 'Quang Tri',
            point: 7
        }
    ]
    const helloWorld = (name) => {
        alert(`Hello ${name}!`)
    }
    return (
        // <>
        //     <h1 id={id} className={id} onClick={() => helloWorld(id)}>Hello</h1>
        // </>
        <StudentList className='CO324H1'/>
    );
}
function categorizedStudent(point){
    if (point >= 8){
        return 'Gioi'
    } else if (point >= 6.5){
        return 'Kha'
    } else if (point >= 5){
        return 'Trung Binh'
    } else if (point >= 3.5){
        return 'Yeu'
    } else {
        return 'Kem'
    }
}

export default App;
