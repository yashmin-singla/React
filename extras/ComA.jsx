import React, { createContext, useEffect, useState } from "react";
import ComB from "./ComB";
import axios from "axios";


const ComA=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();


    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
    })
    return (
        
        <>
        <h1>you choose <span style ={{color:"red"}}>{num} value</span></h1>
        <h1>my name is <span style ={{color:"red"}}>{name}</span></h1>
        <h1>i have <span style ={{color:"red"}}>{moves} </span> moves</h1>
        <br/>
        <br/>
        
      <select value={num} onChange={(event)=>{
          setNum(event.target.value);

      }}>
     

          <option value ="1">1</option>
          <option value ="25">25</option>
          <option value ="3">3</option>
          <option value ="5">5</option>
          <option value ="4">4</option>
      </select>
      </>
    )
}
export default ComA;