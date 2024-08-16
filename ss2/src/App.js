import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const id = "co324h1"

    const students = [
        {
            id:1,
            name:'HaiTT',
            address:'Quang Nam',
            point:9
        },
        {
            id:2,
            name:'HieuTT',
            address:'Quang Tri',
            point:7
        }
    ]
  const helloWorld = (name) => {alert(`Hello ${name}!`)}
  return (
      <>
          <h1 id={id} className={id} onClick={() => helloWorld(id)}>Hello</h1>
          <h4>Browser's details: {navigator.userAgent}</h4>

          <div className="container d-flex align-items-center text-center">
              <div className="form-signin">
                  <form>
                      <img className="mb-4"
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                           alt="" width="72" height="57"/>
                      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                      <div className="form-floating">
                          <input type="email" className="form-control email" id="floatingInput"
                                 placeholder="name@example.com"/>
                          <label>Email address</label>
                      </div>
                      <div className="form-floating">
                          <input type="password" className="form-control password" id="floatingPassword"
                                 placeholder="Password"/>
                          <label>Password</label>
                      </div>
                      <div className="checkbox mb-3">
                          <label>
                              <input type="checkbox"/> Remember me
                          </label>
                      </div>
                      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                  </form>
              </div>
          </div>

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
                              {item.point >= 8 ? 'Gioi' : item.point >= 6.5 ? 'Kha' : item.point >= 5 ? 'Trung Binh' : item.point >= 3.5 ? 'Yeu' : 'Kem'}
                          </td>
                      </tr>
                  )
              }
              </tbody>
          </table>
      </>
  );
}

export default App;
