import React, { useState } from 'react';
import logo from "./Images/logo.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header=()=>{
    
    return(
        <>
       <div className="header">
           <img src={logo} alt="logo" width="80" height="70" align-items="center"/>
           <h1>Google Keep </h1>
       </div>

        </>
    );
};
export default Header;