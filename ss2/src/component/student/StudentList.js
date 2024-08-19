import React, {Component} from "react";

class StudentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
        return (
            <>
                <h1>Hello {this.props.className}</h1>
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Point</th>
                        <th>Hoc luc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((item, index) =>
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.point}</td>
                                <td>
                                    {/*{categorizedStudent(item.point)}*/}
                                    {item.point >= 8 ? 'Gioi' : item.point >= 6.5 ? 'Kha' : item.point >= 5 ? 'Trung Binh' : item.point >= 3.5 ? 'Yeu' : 'Kem'}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default StudentList;