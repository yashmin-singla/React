import React, { useState } from "react";
import Sresult from "./Sresult";
import { useHistory } from "react-router-dom";
const Search=()=>{
    const [img,setImg]=useState("");
    const inputEvent=(event)=>{
const data = event.target.value;
setImg(data);
    }

    

    return(
        <>
      <input type="text" placeholder="Search anything" value={img} onChange={inputEvent}/>
     {img === "" ? null : <Sresult name={img}/>}
        </>
    );
};
export default Search;