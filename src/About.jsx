import React from 'react';
import web from "../src/Images/s2.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common name="Welcome to About page" 
            imgsrc={web} 
            visit="/contact"
             btnname="Contact now"/>

        </>
    );
};
export default About;