import "./Addpatient.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";

const Addpatient = () => {
    const [file, setFile] = useState("");
  return (
    <div className="pat">
    <SideBar/>
    <div className="new">
      
      <div className="newContainer">
        <div className="top">
          <h1>Add New Patient</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
             <div class="formInput">
                  <textarea rows="10" placeholder="Write something.." /></div>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                <div className="formInput" >
                  <label>Patient Username</label>
                  <input type="text" placeholder="John_doe" />
                </div>
                <div className="formInput" >
                  <label>Name and surname</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <input type="email" placeholder="johndoe@gmail.com" />
                </div>
                <div className="formInput" >
                  <label>Phone</label>
                  <input type="number" placeholder="+216 12345678" />
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input type="text" placeholder="" />
                </div>
                <div class="formInput">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Date of Birth" required/>
                        </div>
                
                  <div class="formInput">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                
                            </select>
            </div>
           
                       
                
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Addpatient;
