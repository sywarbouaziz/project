import "./Addpatient.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useEffect } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Updatepatient = () => {
    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:4000/patients/${id}`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setSpeciality(response.data.speciality);
    setPhone(response.data.phone);
    setPassword(response.data.password);

  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/patients/${id}`, {
        username,
        email,
        gender,
        speciality,
        password,
        phone
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pat">
    <SideBar/>
    <div className="new">
      
      <div className="newContainer">
        <div className="top">
          <h1>update Patient</h1>
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
            <form onSubmit={updateUser}>
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
                  <input type="text" placeholder="John_doe" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="formInput" >
                  <label>Name and surname</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <input type="email" placeholder="johndoe@gmail.com" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="formInput" >
                  <label>Phone</label>
                  <input type="number" placeholder="+216 12345678" value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="formInput" >
                  <label>Password</label>
                  <input type="text" placeholder="" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="formInput">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Date of Birth" required/>
                        </div>
                
                  <div class="formInput">
                            <label>Gender</label>
                            <select required value={gender}
                onChange={(e) => setGender(e.target.value)}>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                
                            </select>
            </div>
           
                       
                
              <button>update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Updatepatient;
