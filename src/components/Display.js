import { useState } from "react";
import "./Display.css";


const Display =({contract,account})=>{
    //console.log(account);
    const [data,setData]=useState("");
    
     const getdata= async()=>{
        let dataArray;
        const otherAddress=document.querySelector(".address").value;
        console.log(otherAddress);
        if(otherAddress)
        {
           dataArray= await contract.display(otherAddress);
           console.log(dataArray);
        }
        else{
           dataArray= await contract.display(account);
           console.log(dataArray);
        }

        if (dataArray) {
         const isEmpty = Object.keys(dataArray).length === 0;
         if (!isEmpty) {
            const str = dataArray.toString();
            const str_array = str.split(',');
            const images = str_array.map((item, i) => {
               return (
                 <a href={item} key={i} target="_blank">
                   <img
                     key={i}
                     src={`https://gateway.pinata.cloud/ipfs/${item.substring(7)}`}
                     alt="new"
                     className="image-list"
                   ></img>
                 </a>
               );
             });
           setData(images);
         } else {
           console.log('No image to display');
         }
       } else {
         console.error('Error fetching data');
       }

     };
    return <>
     <div  className='image-list'> {data}</div>
     <input type="text" placeholder="Enter Address" className="address"></input>
     <button className="center-button" onClick={getdata}>getData</button>
    </>

}
export default Display;