import React from 'react';
import SideBar from '../../components/Sidebar/SideBar';
import "./Appointment.css"
const Appointment = () => {
  return(
    <div className='pat'>
      <SideBar/>
    <div className='body'>
    <div class="container">
    <div class="title">Book Appointment</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="First Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" placeholder="Last Name" required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="email" placeholder="Email" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="number" placeholder="Phone Number" required/>
          </div>
          <div class="input-box">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required/>
                        </div>
                        <div class="input-box">
                            <label>Doctor</label>
                            <select required>
                                <option disabled selected>Select Doctor</option>
                                <option>Dr. John Smith</option>
                                <option>Dr. Maryam Amiri</option>
                                <option>Dr. Hossin shams</option>
                            </select>
                        </div>
                        <div class="input-box">
                            <label>Appointment Date</label>
                            <input type="date" placeholder="Appointment Date" required/>
                        </div>
                        <div class="input-box">
                            <label>Service</label>
                            <select required>
                                <option disabled selected>Select Service</option>
                                <option>full body checkup</option>
                                <option>dental checkup</option>
                                <option>heart checkup</option>
                            </select>
                        </div>
        </div>
       
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          </div>
        </div>
        
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>
  </div></div>
  );
};

export default Appointment;
