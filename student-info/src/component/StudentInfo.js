import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students:[
                { id: 1, name: 'HaiTT', age: 26, address: 'Quang Nam' },
                { id: 2, name: 'HieuTT', age: 24, address: 'Quang Tri' },
            ]
        }
    }
    render() {
        return (
            <>
                <table className="table-dark" >
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
                        this.state.students.map((item, index) =>
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
}
export default StudentInfo