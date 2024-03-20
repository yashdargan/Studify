import React from "react";
import "./index.css";
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className="main_container">
      <img id='logo' src={logo} width={350} height={135} alt='logo'/>
      <div className="center_container">
        Login
        <div className="menu_container">
          <div>UserName</div>
          <input type="text" className='input_login' />
          <div>Password</div>
          <input type="text" className='input_login' />
        </div>
        <div className="btn">Login</div>
      </div>
    </div>
  );
};
export default Login;
