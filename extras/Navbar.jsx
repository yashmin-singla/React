import React from "react";
import {NavLink} from "react-router-dom";
const Navbar =()=>{
    
    return(
        <>
     <NavLink to ="/" exact activeClassName="active_class">About Us</NavLink>
     <NavLink to="/contact/:name" activeClassName="active_class">Contact Us</NavLink>
     <NavLink to="/search" activeClassName="active_class">search</NavLink>
     <br/>
        </>
    )
};
export default Navbar;