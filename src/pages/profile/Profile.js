import React, { useCallback, useContext } from "react";
import UserContext from "../../component/context/UserContext";

const Profile=()=>{

    const {user}=useContext(UserContext);
    console.log(user,'user profile')
    return(
        <article>
            <h3>
                hi
            </h3>
            <p>
                my name is<span>{user.name}</span>
            </p>
        </article>
    )
};

export default Profile;