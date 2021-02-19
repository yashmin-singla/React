

// function App() {

//         let currDate = new Date();
//         currDate=currDate.getHours();
//         let greeting = '';
//         const cssStyle={};
//         if(currDate>=1 && currDate<12)
//         {
//         greeting='Good Morning';
//         cssStyle.color="green";
//         }
//         else if(currDate>=12 && currDate<19)
//         {
//           greeting='Good afternoon';
//           cssStyle.color="orange";
//         }
//         else{
//         greeting='Good Night';
//         cssStyle.color="black";
//         }
//         return(
//             <>
//             <div>
//     <h1>
//         Hello sir,<span style={cssStyle}>{greeting} </span>
//     </h1>
// </div>
// </>
//         );

// }
// export default App;

//************************************* */
// const youtuber = 'thapa technical';
// const favprog='React';

// function myName() {
//     let name = 'vinod';
//     return name;
// }
// export default youtuber;
// export {favprog,myName};



//******************************************** */
// slot machine game//
// import SlotM from "./SlotMachine";
// const App=()=>{
// return(
//     <>
//     {" "}
//     <h1 className="heading_style"> 🎰 Welcome to <span style={ {fontWeight :"bold"}}>Slot machine game</span> </h1>
//    <div className="slotmachine">
//    <SlotM x="😊" y="😊" z="😊"/>
//    <SlotM x="😊" y="😆" z="😊"/>
//    <SlotM x="🍎" y="🍌" z="🍎"/>
//    <SlotM x="💞" y="💞" z="💞"/>
//    </div>




//     </>
// )
// };
// export default App;



//******************************************************* */

//increase count using a button//


// const App = ()=>{
//     const state = useState();
// const [count,setCount]=useState(0);


// // let count =1;
// const IncNum = ()=>{
// setCount(count + 1);
//     // count ++;
//     // console.log("clicked");
// };

//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncNum}>Click Me</button>
//         </>
//     );
// };
// export default App;


//********************************************************************* */
//challenge 6 

// get locale time of machine



// const App = ()=>{
// let newTime=new Date().toLocaleTimeString();

// const [ctime,setCtime]=useState(newTime);
// const UpdateTime=()=>{
//     let newCTime=new Date().toLocaleTimeString();
//     setCtime(newCTime);
// }



//     return (
// <>
// <h1>{ctime}</h1>
// <button onClick={UpdateTime}>Get Time</button>
// </>
//     );
// };
// export default App;

//************************************************** */
//digital clock//




// const App = ()=>{

// let time =new Date().toLocaleTimeString();

// const [ctime,setCtime]=useState(time);

// const UpdateTime =()=>{
//     time=new Date().toLocaleTimeString();
//     setCtime(time);
// };
// setInterval(UpdateTime,1000);








//     return (
// <>
// <h1>{ctime}</h1>
// </>
//     );

// }
// export default App;

//**************************************************************** */


// const App =()=>{
//     const purple = "#8e44ad";
//     const [bg,setBg]=useState(purple);
//     const [name,setName]=useState("Click Me");
// const bgChange =()=>{
//     let newBg = "#34495e";
//     setBg(newBg);
//     setName ("Ouch!! 🤯" );

// };
// const bgBack =()=>{
//     setBg(purple);
//     setName("Ayyo 😠" );
// }

// return(
//     <>
// <div style={ {backgroundColor:bg}}>
//     <button onMouseEnter={bgChange} onMouseLeave={bgBack}>  {name}</button>
// </div>
//     </>
// );
// };
// export default App;
//*********************************************************** */


// login forms


// const App = () => {

//     const [fullName, setFullName] = useState({
//         fname :"",
//         lname : "",
//         email:"",
//         phone:"",
//     });

//     const InputEvent = (event) => {


// const {value,name}=event.target;

// setFullName((preValue)=>{

//     return {
//         ...preValue,
//         [name]:value,
//     }
// if(name == "fName"){
//     return{
//         fname:value,
//         lname:preValue.lname,
//         email:preValue.email,
//         phone:preValue.phone,
//     };


// }
// else if(name=="lName"){
//     return{
//         fname:preValue.fname,
//         lname:value,
//         email:preValue.email,
//         phone:preValue.phone,
//     };
// }else if(name=="email"){
//     return{
//         fname:preValue.fname,
//         lname:preValue.lname,
//         email:value,
//         phone:preValue.phone,
//     };
// }else if(name=="phone"){
//     return{
//         fname:preValue.fname,
//         lname:preValue.lname,
//         email:preValue.email,
//         phone:value,
//     };
//}
// })


//     }

//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form Submitted");

//     }


//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>Hello {fullName.fname} {fullName.lname} </h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.phone}</p>
//                         <input 
//                         type="text"
//                          placeholder="Enter your Name" 
//                          onChange={InputEvent} 
//                          name="fname"
//                          value={fullName.fname} />
//                         <input 
//                         type="text" 
//                         placeholder="Enter your Last Name" 
//                         onChange={InputEvent}
//                         name="lname"
//                          value={fullName.lname} />
//                         <input 
//                         type="email" 
//                         placeholder="Enter your Email"
//                         name="email"
//                          onChange={InputEvent}
//                           value={fullName.email} 
//                               autoComplete="off"
//                           />
//                         <input 
//                         type="number" 
//                         placeholder="Enter your Mobile Number"
//                         name="phone"
//                          onChange={InputEvent}
//                           value={fullName.phone} />
//                         <br />
//                         <button type="submit">Submit Me 👍</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };
// export default App;

//************************************************************************* */

//to do list

// import ToDoList from "./ToDoList";
// const App = () => {

//     const [inputList, setInputList] = useState("");
//     const [Items, setItems] = useState([]);
//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     }
//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList];

//         });
//         setInputList("");
//     };
//     const deleteItems = (id) => {
//         setItems((oldItems) => {
//             return oldItems.filter((arrElem, index) => {
//                 return index !== id;
//             })
//         })

//     };

//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo List</h1>
//                     <br />
//                     <input type="text" placeholder="Add an Item" onChange={itemEvent} value={inputList} />
//                     <button onClick={listOfItems}>+</button>
//                     <ol>

//                         {Items.map((itemval, index) => {

//                             return <ToDoList
//                                 key={index}
//                                 id={index}
//                                 text={itemval}
//                                 onSelect={deleteItems}
//                             />
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default App;

//************************************************************* */
// using bootstrap in react

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const App = () => {






//     return (
//         <>



//              <h1 className="text-center text-danger my-5" >Welcome</h1> 
//              <div class="container">
//   <div className="row">
//     <div className="col-sm">
//     <div class="card" >
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//     <div class="card" >
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//     <div class="card">
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."height="200px"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>
//         </>
//     );
// };
// export default App;           

//******************************************************************* */

//google keep //



// import Header from "./Header";
// import Footer from "./Footer";
// import CreateNote from "./CreateNote";
// import Note from "./Note";

// const App=()=>{
//     const [addItem,setAddItem]=useState([]);
//     const addNote=(note)=>{
//         // alert("I am clicked");
//         setAddItem((prevData)=>{
//             return [...prevData,note];
//         });
//     };

//     return(
//         <>
//         <Header/>
//         <CreateNote
//             passNote ={addNote}
//         />

//         {addItem.map((val,index)=>{
//             return <Note
//             key={index}
//             id={index}
//             title={ValidityState.title}
//             content={ValidityState.content}
//             />
//         })}
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>


//          <Footer/> 


//         </>
//     );
// };
// export default App;

//**************************************************************** */
// import ComA from "./ComA"
// const FirstName = createContext();
// const LastName = createContext();
// const App =()=>{
// return(
//     <> 
//     <FirstName.Provider value ={"Yashmin"}>
//     <LastName.Provider value ={"Singla"}>

// <ComA/>
//     </LastName.Provider>
//     </FirstName.Provider>


//     </>
// )
// };
// export default App;
// export {FirstName ,LastName};

//************************************************ */

// const App =()=>{
//     const [num,setNum]=useState(0);
//     useEffect(()=>{
//         document.title=`you clicked me ${num}`;

//         // alert("Clicked");

//     },[num]);//this empty array means vo sirf page refresh krne pe hua , if u pass sth to vo wale button se change hoga
//     return(
//         <>
//        <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>

//         </>
//     )
// };
// export default App;


//*********************************************************** */




// import About from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// import Navbar from "./Navbar";
// import Search from "./Search";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// const App = () => {
//     const Name=()=>{
//         return (
//         <>
//         <h1 className="text-center">Hi</h1>
//         <br/>
//         <button className="btn">Welcome</button>
// </>
//         )
//     }
// return(
//     <>
//     <h1>Hi</h1>
//     </>
// )
//     // return (
//     //     <>
//     //     <Navbar/>
//     //         <Switch>
//     //             <Route exact path="/" component={()=><About name ="About"/>} />
            
//     //              <Route exact path="/contact/:fname/:lname" component={Contact} /> 
//     //              <Route exact path="/search" component={Search} /> 
//     //             {/* <Route  path="/contact/:name" component={Contact} /> */}
//     //             {/* <Route  component={Error} /> */}
//     //             <Redirect to ="/"/>
//     //         </Switch>

//     //     </>
//     // )
// };
// export default App;

//********************************************************** */
// website 
import React from 'react';

import { Route, Switch ,Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route eaxct path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to= "/"/>
    </Switch>
  

    </>
    )
};
export default App;