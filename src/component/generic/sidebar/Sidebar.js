import React from "react";
import {NavLink} from 'react-router-dom';
import './style.css'

const Sidebar=()=>{
    return(
        <aside>
        <h3>sidebar</h3>
        <ul>
            <li>
                {/* navLink baraye system routing dar react estefadeh mishavad.mesle tage a dar html */}
                <NavLink  to ='/'>
                    home
                </NavLink>
            </li>
             <li>
                <NavLink to='/post'>
                    post
                </NavLink>
            </li>
            <li>
                <NavLink to='/profile'>
                    profile
                </NavLink>
            </li> 
        </ul>
        </aside>
    )
}

export default Sidebar;