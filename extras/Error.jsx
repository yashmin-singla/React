import React from "react";
import {NavLink} from "react-router-dom";
const Error =()=>{
    
    return(
        <>
        <h1>404,Error found page doent exist</h1>
        <NavLink to ="/"> Go back</NavLink>

        </>
    )
};
export default Error;