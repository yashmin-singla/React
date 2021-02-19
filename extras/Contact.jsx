import React from "react";
import { useParams,useLocation,useHistory } from "react-router-dom";
const Contact =({match})=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    
    
    return(
        <>
        <h1>user {fname } {lname} page</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/yashmin/singla` ? (<button>Click Me</button>):null}
        <br/>
        <button onClick={()=> history.goBack()}>Click Me</button>
        <br/>
        <button onClick={()=> history.goForward()}>Click Me</button>
        </>
    )
};
export default Contact;