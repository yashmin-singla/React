import React from "react";
import {FirstName } from "../src/App";
const ComC=()=>{
    return (
    <>
    <FirstName.Consumer>
        {(fname)=>{
            return <h1>Hi {fname}</h1>
        }}
    </FirstName.Consumer>
    </>
    )
};
export default ComC;
