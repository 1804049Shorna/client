// import { useState } from "react";
// import axios from "axios";
// import "./Fileupload.css";

// const Fileupload =({contract,account,provider})=>{
//      const handleSubmit=async(e)=>{
//      };
//     const retrieveFile=(e)=>{
//     };
//     return (<div>
//          <form className="form" onSubmit={handleSubmit}>
//             <label htmlFor="file-upload" className="choose">
//                 choose image
//             </label>
//             <input disabled={account} type="file " id="file-upload" name="data"onChange={retrieveFile}> </input>
//             {/* <span className="textArea">Image:#temporary.png</span> */}
//             <button type="submit" className="upload"></button>
//         </form>
//     </div>)

// }
// export default Fileupload;

import { useState } from "react";
import axios from "axios";
import "./Fileupload.css";

const Fileupload = ({ contract, account, provider }) => {
  const handleSubmit = async (e) => {};
  const retrieveFile = (e) => {};

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose image
        </label>

        <input
          disabled={account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <button type="submit" className="upload">Upload File</button>
      </form>
    </div>
  );
};

export default Fileupload;
