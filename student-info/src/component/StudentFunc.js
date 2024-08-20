import {useEffect, useState} from "react";

function StudentFunc() {
    const [students,setStudents]=useState([])

    useEffect(() => {
        console.log(1)
    }, []);
    return(
        <>
            <table className="table-dark">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default StudentFunc