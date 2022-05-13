import React, { useContext } from "react";
import "./style.css";
import ThemeContext from "../../context/ThemeContext";
import Login from "../../../pages/login/Login";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  const {logOut,user} = useContext(UserContext);
  return (
    <header style={{ backgroundColor: theme.background, color: theme.color }}>
    
      <h1>My Header</h1>
      <span>hi name {user.name} </span>
      <span style={{color:'red',margin:'1rem',padding:'2rem'}}  onClick={()=>logOut()}>logout</span>
      <Link to="/login">login</Link>
    </header>
  );
};

export default Header;
