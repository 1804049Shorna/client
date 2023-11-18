import { useState } from "react";
import "./Display.css";


const Display =({contract,account})=>{
    //console.log(account);
    const [data,setData]=useState("");
    
     const getdata= ()=>{
        let dataArray;
        const otherAddress=document.querySelector(".address").value;
        console.log(otherAddress);
        if(otherAddress)
        {
           dataArray=  contract.display(otherAddress);
           console.log(dataArray);
        }
        else{
           dataArray= contract.display(account);
           console.log(dataArray);
        }

    //    const isEmpty=Object.keys[dataArray].length === 0;
    //     if (!isEmpty){
    //         const str=dataArray.toString();
    //         const str_array=str.split(".");
    //         console.log(str);

    //     }else{
    //         console.log("No image to display");
    //     }


     };
    return <>
     <div  className='image-list'> Display Image</div>
     <input type="text" placeholder="Enter Address" className="address"></input>
     <button className="center-button" onClick={getdata}>getData</button>
    </>

}
export default Display;