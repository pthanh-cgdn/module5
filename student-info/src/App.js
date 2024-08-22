import './App.css';
import StudentCreate from "./component/StudentCreate";
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import StudentFunc from "./component/StudentFunc";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StudentEdit from "./component/StudentEdit";

function App() {
  return (
      <>
      <BrowserRouter>
          <div className='navbar navbar-expand-lg navbar-light bg-light'>
              <NavLink className='navbar-brand' to={"/students"}>Danh sach hoc sinh</NavLink>
              <NavLink className='navbar-brand' to={"/create"}>Them moi</NavLink>
          </div>
          <Routes>
              <Route path="/create" element={<StudentCreate/>} />
              <Route path="/edit/:id" element={<StudentEdit />} />
              <Route path="/students" element={<StudentFunc/>} />
          </Routes>
      </BrowserRouter>
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
