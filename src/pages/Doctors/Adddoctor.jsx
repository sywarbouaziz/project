import "./Adddoctor.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Adddoctor = () => {
    const [file, setFile] = useState("");
    
 
    const navigate = useNavigate();
    
    const [values, setValues] = useState({ email: "", password: "",phone:"",username:"",speciality:"",gender:""});
    const generateError = (error) =>
      toast.error(error, {
        position: "bottom-right",
      });
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:4000/register",
          {
            ...values,
          },
          { withCredentials: true }
        );
        if (data) {
          if (data.errors) {
            const { email, password } = data.errors;
            if (email) generateError(email);
            else if (password) generateError(password);
          } else {
            navigate("/");
          }
        }
      } catch (ex) {
        console.log(ex);
      }
    };
  return (
    <div className="pat">
      <SideBar/>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Doctor</h1>
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
          </div>
          <div className="right">
            <form onSubmit={(e) => handleSubmit(e)}>
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
                  <label>Doctor Username</label>
                  <input type="text" placeholder="John_doe" name="username" onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />
                </div>
                <div className="formInput" >
                  <label>Name and surname</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <input type="email" name="email" placeholder="johndoe@gmail.com" onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />
                </div>
                <div className="formInput" >
                  <label>Phone</label>
                  <input type="number" placeholder="+216 12345678" name="phone" onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }/>
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input type="text" placeholder="" name="password" onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }/>
                </div>
                <div className="formInput" >
                  <label>Speciality</label>
                  <input type="text" placeholder="" name="speciality" onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />
                </div>
                
                  <div class="formInput">
                            <label>Gender</label>
                            <select name="gender" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }>
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
    <ToastContainer />
    </div>
  );
};

export default Adddoctor;
