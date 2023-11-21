import { useEffect } from "react";
import "./Modal.css";


const Modal =({setModalOpen,contract})=>{
    const sharing=async()=>{
        const address=document.querySelector(".address").value;
        await contract.giveAccess(address);
        console.log("shared");
    };
   return <>
      <div className="modalBackground" >
        <div className="modalContainer">
            <div className="title">Share With</div>
            <div className="body">
                <input type="text" className="address" placeholder="Enter your Address"></input>
            </div>
            <form id="myform">
                <select id="selectNumber">
                    <option className="address">People with Access</option>
                </select>
            </form>
            <div className="footer">
                <button onClick={()=>{setModalOpen(false)}} id="cancelBtn">Cancel</button>
                 <button onClick={()=>sharing()}>share</button>

            </div>
        </div>
      </div>
   </>
}
export default Modal;