import { useState } from "react";
import "./Display.css";


const Display =({contract,account})=>{

    const [data,setData]=useState("");
     const getdata= async()=>{

     }
    return <>
     <div  className='image-list'> Display Image</div>
     <input type="text" placeholder="Enter Address" className="address"></input>
     <button className="center-button" onClick={getdata}>getData</button>
    </>

}
export default Display;