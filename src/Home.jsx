import React from 'react';
import web from "../src/Images/img2.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (
        <>
        <Common name="Grow your bussiness with " 
            imgsrc={web} 
            visit="/service"
             btnname="Get Started"/>

        </>
    );
};
export default Home;