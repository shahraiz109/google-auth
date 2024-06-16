import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import img from "../assets/myimage.jpg"
const Header = () => {
  const [userdata, setUserdata] = useState({});
  console.log(userdata);
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5001/login/success", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

   const logout = () => {
        window.open("http://localhost:5001/logout","_self")
   }

  return (
    <>
      <header>
        <nav>
          <div className="left">shahraiz</div>
          <div className="right">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {Object.keys(userdata).length > 0 ? (
                <>
                <li style={{color:"red", fontWeight:"bold"}}>{userdata.displayName}</li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li onClick={logout}>Logout</li>
                  <li>
                    <img
                      src={userdata.image}
                      alt=""
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
