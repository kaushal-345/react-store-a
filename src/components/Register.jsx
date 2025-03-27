import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from "react";
import "./Register.css";

export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState();
  const msgRef=useRef();

  const handleSubmit = () => {
    const found = users.find((value) => value.email === user.email);
    if (found) {
      setMsg("User already exists");
      msgRef.current.style.color = "red";
    } else {
      setMsg();
      setUsers([...users, user]);
      setUser({ ...user, name: "", email: "", password: "" });
    }
  };

  // const handleSubmit = () => {
  //   const exists=users.some(
  //     (u) => u.name===user.name && u.email===user.email && u.password===user.password
  //   );
  //     if(exists){
  //       alert("user exists")
  //     }else{
  //       setUsers([...users, user]);
  //     }
  // };
  //also try with array ka find (apparently) array.find,filter,map 

  const handleDelete = (email) => {
    setUsers(users.filter((value) => value!==email));
  }

  return (
    <div>
      <div className="App-Row">
        <div className="App-Box">
        <h3>Registration Form</h3>
        <p ref={msgRef}>{msg}</p>
          <p>
            <input 
            type="text" 
            value={user.name}
            placeholder='Enter Name'
            onChange={(e)=>setUser({...user, name: e.target.value})}
            ></input>
          </p>
          <p>
            <input 
            type="text" 
            value={user.email}
            placeholder='Email address'
            onChange={(e)=>setUser({...user, email: e.target.value})}
            ></input>
          </p>
          <p>
            <input 
            type="password" 
            value={user.password}
            placeholder='New password'
            onChange={(e)=>setUser({...user, password: e.target.value})}
            ></input>
          </p>
          <p><button onClick={handleSubmit}>Submit</button></p>
          <p><Link to="../login">Already a member? Login here!</Link></p>
        </div>

        {/* <div className="App-Box">
          {users.map((value, index) => (
            <li key={index}>
              {value.name} | {value.email} | {value.password}- <button onClick={() => handleDelete(value)}>Delete</button>
            </li>
          ))}
        </div> */}

        <div className="App-Box">
          {users.length>0 && (
            <table border="1">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>
                      <button onClick={() => handleDelete(value)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  )
}