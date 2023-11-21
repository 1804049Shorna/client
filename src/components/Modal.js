import { useEffect } from "react";
import "./Modal.css";


const Modal =({setModalOpen,contract})=>{
    const sharing=async()=>{
        const address=document.querySelector(".address").value;
        await contract.giveAccess(address);
        console.log("shared");
    };
    const remove=async()=>{
        const address=document.querySelector(".address").value;
        await contract.disallow(address);
        console.log("Removed");
    };
    useEffect (()=>{
        const accessList=async()=>{
            const addressList=await contract.shareAccess();
            let select=document.querySelector("#selectNumber");
            let options=addressList;
            for (let i=0;i<options.length;i++){
                let opt=options[i];
                let e1=document.createElement("option");
                e1.textContent=opt;
                e1.value=opt;
                select.appendChild(e1);

            }
        }
        contract && accessList();
    },[contract]);
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
                 <button onClick={()=>remove()}>Remove</button>

            </div>
        </div>
      </div>
   </>
}
export default Modal;