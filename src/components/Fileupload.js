import { useState } from "react";
import axios from "axios";
import "./Fileupload.css";

const Fileupload = ({ contract, account, provider }) => {
  const[file,setFile]=useState(null);
  const[fileName,setFileName]=useState("No image selected");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(file){
      try{
       
       const formData = new FormData();


      }catch(e){
        alert("Unable to upload to pinata");

      }
    }

  };
  const retrieveFile = (e) => {};

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose image
        </label>

        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image:{fileName}</span>
        <button type="submit" className="upload">Upload File</button>
      </form>
    </div>
  );
};

export default Fileupload;

