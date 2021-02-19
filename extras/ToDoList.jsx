import React, { useState } from "react";
// const ToDoList =(props)=>{
    
// return (
// <>
// <div className="todo_style">
// <i className="fa fa-times" aria-hidden="true"
//     onClick={()=>{
//         props.onSelect(props.id);
//     }}/>

// <li>{props.text}</li>
// </div>
// </>
// );
// }
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';

//************************************************************** */

//increment decrement


// const ToDoList =()=>{

// const [num,setNum]=useState(0);
// const incNum=()=>{
//     setNum(num+1);
// };
// const decNum=()=>{
//     if(num>0){
//     setNum(num-1);
//     }
//     else{
//         alert("Sorry,Zero limit reached");
//         setNum(0);
//     }
// };



//     return(
//         <>
//         <div className="main_div">
//             <div className="center_div">
//             <h1>{num}</h1>
//             <div className="btn_div">
//             <Tooltip title="Add" aria-label="add">
//             <Button onClick={incNum}><AddIcon/></Button>
//             </Tooltip>

                
//                 <Tooltip title="Delete">
//                 <Button onClick={decNum}><DeleteIcon/></Button>
//                 </Tooltip>
               
//             </div>

//             </div>
//         </div>
//         </>
//     )
// }


//***************************************************** */
 //digital clock in 2 lines//

//  import Clock from 'react-digital-clock';

//  const ToDoList=()=>{
//      return(
// <Clock/>)

//  };
//************************************************************** */
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ListCom from "./ListCom";
const ToDoList=()=>{
    const [item,setItem]=useState("");
    const [newitem,setNewItem]=useState([]);
    const itemEvent=(event)=>{
        setItem(event.target.value);
    };
    const listOfItems =()=>{
        setNewItem((prevValue)=>{
            return[...prevValue,item];
        });
        setItem("");
    };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input
                type="text"
                value={item}
                placeholder="Add an Items"
                onChange={itemEvent}
                />
                <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon/>
                </Button>
                <br/>
                <ol>
                    {newitem.map((val,index)=>{
                        return<ListCom key={index} text={val}/>;
                    })} 

                </ol>
                <br/>
            </div>
        </div>
        </>
    );
};
 export default ToDoList;

