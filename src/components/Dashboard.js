import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5001/login/success", {
        withCredentials: true,
      });
      console.log(response,"response");
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    navigate("*")
  }, []);

  return (
  <>
    <div style={{textAlign:"center"}}>
      Dashboard
    </div>
    </>
  )
}

export default Dashboard
