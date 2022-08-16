import React, { useEffect } from "react";
import { useNavigate,BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard/Dashboard";


export default function Cards() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  
  return (
    <>

      <ToastContainer />
    </>
  );
}
//<div className="private">
//const logOut = () => {
  //removeCookie("jwt");
  //navigate("/login");
//};
//<h1>Super Secret Page</h1>
//<button onClick={logOut}>Log out</button>
//</div>