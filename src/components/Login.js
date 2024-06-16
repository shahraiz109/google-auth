import React from 'react'
import "./login.css"
const Login = () => {

     const loginwithgoogle = () => {
      window.open("http://localhost:5001/auth/google/callback","_self")
     }

  return (
  <>
     <div className='login-page'>
    <h1 style={{textAlign:"center"}}>Login</h1>
    <div className='form'>
      <form className='login-form'>
      <input type='text' name='' id='' placeholder='username'/>
      <input type='password' name='' id='' placeholder='password'/>
    <button>Login</button>
    <p className='message'>Not Registered? <a href='#'>create an account</a></p>
      </form>
      <button className='login-with-google-btn' onClick={loginwithgoogle}>SIGN IN WITH GOOGLE</button>
    </div>
     </div>
  </>
  )
}

export default Login
