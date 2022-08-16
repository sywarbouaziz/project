import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Patients.css";
import SideBar from '../../components/Sidebar/SideBar'
const Patients = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/patients");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/patients/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pat">
      <SideBar/>
    
    <div className="bodo">
      
      <div className="header_fixed">
        
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Gender</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.speciality}</td>
                <td>{user.gender}</td>
                
                <td >
                  <Link
                    to={`edit/${user._id}`}
                    
                  >
                    Edit
                  </Link>
                  </td>
                  <td >
                  <button
                    
                    
                  >
                    view
                  </button>
                  </td>
                  <td >
                  <button
                    onClick={() => deleteUser(user._id)}
                    
                  >
                    Delete
                  </button>
                  </td>
                 
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  );
};

export default Patients;
