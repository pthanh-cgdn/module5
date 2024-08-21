import logo from './logo.svg';
import './App.css';
import StudentInfo from "./component/StudentInfo";
import StudentCreate from "./component/StudentCreate";
import {Formik} from "formik";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import StudentFunc from "./component/StudentFunc";

function App() {
  return (
      <BrowserRouter>
          <div className='container-fluid row nav nav-link'>
              <NavLink className='navbar-brand' to={"/student"}>Danh sach hoc sinh</NavLink>
              <NavLink className='navbar-brand' to={"/create"}>Them moi</NavLink>
          </div>
          <Routes>
              <Route path="/create" element={<StudentCreate />} />
              <Route path="/student" element={<StudentFunc/>} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
