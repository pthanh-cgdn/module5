import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { Table, Form, Button, Modal } from 'react-bootstrap';
import * as studentService from "../../../student-info/src/service/StudentService";
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from "react-toastify";

function StudentListFunc() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect (() => {
        //     Call API search  name
        getAllStudents(name)
    },[name])


    useEffect(() => {
        return () => {
            //clean up <=> componentWillUnmount
        }
    }, [])

    const deleteStudent = async (id) => {
        let isSuccess = await studentService.deleteStudent(id)
        if(isSuccess) {
            setStudents(students.filter(s => s.id !== id));
            toast.success("Xoa hoc sinh thành công")
        } else {
            toast.error("Xoa thất bại.")
        }
    }

    const getAllStudents = async (name) => {
        let res = await studentService.getAllStudents(name);
        setStudents(res)
    }

    const handleShow = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
    };


    return (
        <>

            <div className='container-fluid mt-3'>
                <input className='input_field w-25 mt-3 mb-3' placeholder='search by name' value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <div className='mb-3'>
                <Link to="/create">
                    <button className='btn btn-primary'>Thêm mới</button>
                </Link>
                </div>

            </div>
            <table className="table table-hover text-center">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                    <th>Xep loai</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.point}</td>
                            <td>{item.point>=8?'Gioi':item.point>=6.5?'Kha':item.point>=5?'Trung Binh':item.point>=3.5?'Yeu':'Kem'}</td>
                            <td className='d-flex justify-content-evenly'>
                                <button className="btn btn-success pr-3">Detail
                                </button>
                                <Link to={`/edit/${item.id}`}><button className="btn btn-warning"
                                >Edit
                                </button>
                                </Link>
                                <button className="btn btn-danger pr-3"  onClick={() => handleShow(item)}>Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xoá</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xoá học sinh {selectedStudent?.name} không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Huỷ
                    </Button>
                    <Button variant="danger" onClick={() => deleteStudent(selectedStudent.id)}>
                        Xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StudentListFunc;