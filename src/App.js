import React from "react";
import Register from "./pages/Register/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login/Login";

import "react-toastify/dist/ReactToastify.css";
import Doctors from "./pages/Doctors/Doctors"
import Patients from "./pages/Patients/Patients";
import Adddoctor from "./pages/Doctors/Adddoctor";
import Addpatient from "./pages/Patients/Addpatient";
import Appointment from "./pages/Appointment/Appointment"
import "./App.css"

import Dashboard from "./pages/Dashboard/Dashboard";
import Updatepatient from "./pages/Patients/updatepat";
export default function App() {

  return (
    <Router>
    
      <Routes>
        
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard/>} />
        <Route path="/doctors" element={<Doctors />} />
         <Route path="/patients" element={<Patients />} />
         <Route path="/register" element={<Adddoctor/>}/>
         <Route path="/newpatient" element={<Addpatient/>}/>
         <Route path="/appointment" element={<Appointment />} />
         <Route path="/patients/edit/:id" element={<Updatepatient/>}/>
         <Route path="*" element={<> not found</>} />
      </Routes>
    </Router>
     
  );
}
