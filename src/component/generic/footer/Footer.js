import React, { useContext } from "react";
import './style.css';
import ThemeContext from "../../context/ThemeContext";

const Footer=()=>{
    const theme=useContext(ThemeContext);
    return(
        <footer style={{...theme}} className="footer">
            <h2>Bye</h2>
        </footer>
    );
}

export default Footer;