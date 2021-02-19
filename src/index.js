
// // const arr = ["vinod","thapa"]
// // ReactDOM.render(
// //   <div>
// //   <h1>Thapa Technical</h1>
// //   <p>plz like</p>
// //   <h2>plz subscribe</h2>
// //   </div>,document.getElementById('root')
// // );//by using react and jsx it takes only one single element so to use both at same time we use this div and oske ander jitne marji add kri jao

// // ReactDOM.render(
// //   [
// //   <h1> Thapa Technical </h1>,
// //   <p> plz like and share </p>,
// //   <h2>plz subscribe</h2>,
// //   ],
// //   document.getElementById('root')
// // );//by using react and jsx it takes only one single element so to use both at same time we can use array of elements method

// ReactDOM.render(
//   <React.Fragment>
//   <h1>Thapa Technical</h1>
//   <p>plz like</p>
//   <h2>plz subscribe</h2>
//   </React.Fragment>,document.getElementById('root')
// );//by using react and jsx it takes only one single element so to use both at same time we use this react.fragment and oske ander jitne marji add kri jao ise extra div nhi ban rha hai
// //always use this and it is faster n consume less memory to div


// //using pure javascript
// // var h1=document.createElement("h1");
// // h1.innerHTML="Thapa Technical";
// // document.getElementById("root").appendChild(h1);


//*********************************************** */


/// challenge no 1 
// import React from "react";
// import ReactDom from "react-dom";

// ReactDom.render(
//     <React.Fragment>
//         <h1>Yashmin Singla Netflix Pack</h1>
//         <p>Here is list of my 5 netflix series</p>
//         <ol>
//         <li>Dark</li>
//         <li>Extra curricular</li>
//         <li>My holo love</li>
//         <li>My first-2 love</li>
//         <li>Mr Robot</li>


//         </ol>
//     </React.Fragment>,

//     document.getElementById("root")
// );


//************************************************** */


// const fname = "yashmin";
// const lname="singla";
// console.log(`my name is ${fname}`);
// ReactDOM.render(
//   <>
//   <h1> {`${fname} ${lname}`}</h1> 

//   <p>my lucky no is {Math.random()}</p>
//   </>
// ,document.getElementById("root")
// );
//this const can be used using curly braces in these curly braces only expression can be used no statemnets cant be used 


//********************************************* */



//challenge no 2
// const name = "yashmin";
// const currDate=new Date().toLocaleDateString();
// const currTime=new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
// <h1>Hello,My name is {name}</h1>
// <p> Current Date is ={currDate}</p>
// <p> Current Time is ={currTime}</p>
// </>
// ,document.getElementById("root")
// );



//************************************************************** */


// const heading = {
//   color:'#fa9191',
//   textTransform: 'capitalize',
//   textAlign:'center',
//   fontWeight:'bold',
//   textShadow:'0px 2px 4px #ffe9c5'
// }
// const name ="yashmin";
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const link="https://www.thapatechnical.com/";
// ReactDOM.render(
//   <>
//   <h1 style={heading}>my name is {name}</h1>

//   <div className="img_div">
//   <img src={img1} alt="randomImages"/>
//   <img src={img2} alt="randomImages"/>
//   <a href={link} target="_thapa">
//   <img src={img3} alt="randomImages"/>
//   </a>
//   </div>
//   </>
//   ,document.getElementById("root")
// );



//***************************************** */
//challenge no 3
// let curDate=new Date();
// curDate=curDate.getHours();
// let greeting = '';
// const cssStyle={};
// if(curDate>=1 && curDate<12)
// {
// greeting='Good Morning';
// cssStyle.color="green";
// }
// else if(curDate>=12 && curDate<19)
// {
//   greeting='Good afternoon';
//   cssStyle.color="orange";
// }
// else{
// greeting='Good Night';
// cssStyle.color="black";
// }


// ReactDOM.render(
//   <>
//   <div >


//   <h1>Hello Sir,<span style={cssStyle}> {greeting} </span></h1>
//   </div>
//   </>
//   ,document.getElementById("root")
// );


//************************************ */

// import App from './App.jsx';
// ReactDOM.render(<App/>,
// document.getElementById("root")
// );

//********************************* */

// import myfav,{favprog,myName} from './App.jsx';
//other option to export
// import * as ques from './App.jsx';




// ReactDOM.render(
//     <>
//     <ol>
//         <li>Thapa</li>
//         <li>{ques.default}</li>
//         <li>{ques.favprog}</li>
//         <li>{ques.myName()}</li>
//     </ol>
//     </>
//     ,document.getElementById("root")
// );

//************************************* */
// import add,{sub,multi,div} from './Calc'
// ReactDOM.render(
// <>
// <ul>
//     <li> Sum of 2 no is{add(40,4)}</li>
//     <li> Subtraction of 2 no is{sub(40,4)}</li>
//     <li> Multiplication of 2 no is{multi(40,4)}</li>
//     <li> Division of 2 no is{div(40,4)}</li>
// </ul>
// </>

//     ,document.getElementById("root")
// );


//*********************************** */

//netflix app
// import Card from "./Cards";
// import Sdata from "./Sdata";

// ReactDOM.render(
//     <>
//     <h1 className="heading_style">List of top 5 netflix series</h1>

//    { Sdata.map((val)=>{
//     return (
//         <Card 
 //          key={val,id}
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname ={val.sname}
//         link ={val.link}
//     />

//     )

// })};
     
    
    

//     </>
   
//     , document.getElementById("root")
// );

//******************************************** */
import {BrowserRouter} from "react-router-dom";
import React from 'react';//react is used for using jsx 
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.jsx";
// import ComA from "./ComA.jsx";


ReactDOM.render(
<>
    <BrowserRouter>
          <App/>

    </BrowserRouter>
    </>
,document.getElementById("root")
);
