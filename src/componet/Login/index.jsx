import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logo.png";

const Login = () => {

  const navigate = useNavigate();
  const navigateToFront = () => {

        navigate('/front')
    }

  return (
    <div className="main_container">
      <img id="logo" src={logo} width={350} height={135} alt="logo" />
      <div className="center_container">
        Login
        <div className="menu_container">
          <div>UserName</div>
          <input type="text" className="input_login" />
          <div>Password</div>
          <input type="text" className="input_login" />
        </div>
        {/* Attach handleLogin function to onClick event of the login button */}
        <div className="btn" onClick={navigateToFront}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;

