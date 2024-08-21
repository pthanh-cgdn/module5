import {useState} from "react";
import {ErrorMessage, Field, Formik, Form} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function StudentCreate() {
    const [form, setForm] = useState({
        id:"",
        name:"",
        address:"",
        point:0
    });
    const navigate = useNavigate()
    const objectValid = {
        id: Yup.number().required("ID khong duoc de trong")
            .min(0,"id khong duoc nho hon 0")
            .max(10000000,"id khong duoc lon hon 1000000"),
        name: Yup.string().required("Tên không được để trống")
            .min(3, "Tên không được ngắn hơn 3 ký tự"),
        address: Yup.string().required("Address khong duoc de trong")
            .min(3,"Address khong duoc ngan hon 3 ky tu"),
        point: Yup.number().required("Point khong duoc de trong")
            .min(0, "point khong duoc nho hon 0")
            .max(10, "point khong duoc lon hon 10")
    }
    const saveStudent = (value) => {
        // e.prevent    Default()
        console.log(value)
        toast.success("Them moi thanh cong")
        navigate("/student")
    }
    return (
        <>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={Yup.object(objectValid)}>
                <Form className='container mt-5 shadow-sm p-3 rounded w-25 bg-white'>
                    <div className='mb-3'>
                        <label className='form-label'>ID:</label>
                        <Field className='form-control' name="id"/>
                        <ErrorMessage className='text-danger' name="id" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Name:</label>
                        <Field className='form-control' name="name"/>
                        <ErrorMessage className='text-danger' name="name" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Address:</label>
                        <Field className='form-control' name="address"/>
                        <ErrorMessage className='text-danger' name="address" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Point:</label>
                        <Field className='form-control' name="point"/>
                        <ErrorMessage className='text-danger' name="point" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Gender:</label>
                        <span className='p-3'><Field className='radio-inline ml-3' name="gender" value='Male'
                                                     type='radio'/> Male</span>
                        <span className='p-3'><Field className='radio-inline ml-3' name="gender" value='FeMale'
                                                     type='radio'/> FeMale</span>
                        <ErrorMessage className='text-danger' name="gender" component="p"></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Class:</label>
                        <Field className='form-control form-select' name="class" as='select'>
                            <option value='C0224H1'>C0224H1</option>
                            <option value='C0324H1'>C0324H1</option>
                            <option value='C0424H1'>C0424H1</option>
                        </Field>
                        <ErrorMessage className='text-danger' name="gender" component="p"></ErrorMessage>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary btn-sm w-50' type="submit">Create</button>
                    </div>
                </Form>
            </Formik>
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-6">*/}
            {/*            <form className="form-control">*/}
            {/*                <div className="mb-3"> ID: <input onChange={(e) => setForm({...form, id: e.target.value})}/>*/}
            {/*                </div>*/}
            {/*                <div className="mb-3"> Name: <input*/}
            {/*                    onChange={(e) => setForm({...form, name: e.target.value})}/>*/}
            {/*                </div>*/}
            {/*                <div className="mb-3"> Address: <input*/}
            {/*                    onChange={(e) => setForm({...form, address: e.target.value})}/>*/}
            {/*                </div>*/}
            {/*                <div className="mb-3"> Point: <input*/}
            {/*                    onChange={(e) => setForm({...form, point: e.target.value})}/>*/}
            {/*                </div>*/}
            {/*                <button onClick={saveStudent}>Create</button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default StudentCreate