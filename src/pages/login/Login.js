import React, { useContext } from "react";
import UserContext from "../../component/context/UserContext";
import { Navigate } from "react-router-dom"


const Login=()=>{
    const {login,auth}=useContext(UserContext);
    
    const signIn=()=>{
        login();

        if(auth){
            return <Navigate to="/" />
        }
    }

    return(
        <article>
            <button onClick={()=>signIn()}>Login</button>
        </article>
    )
};

export default Login;