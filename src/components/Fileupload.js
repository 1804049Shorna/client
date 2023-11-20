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
       formData.append("file",file);
       const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `1bd65dfaeeb3364cd375`,
          pinata_secret_api_key: `37bc514a5aab4e59413a94688d3684e33c70e0189245e24cc912648af3bb20ad`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;

    //  const signer=contract.connect(provider.getSigner());
     contract.add(account,ImgHash);

     alert("Succesfully image Uploaded");
     setFileName("No image selected");
     setFile(null);



      }catch(e){
        alert("Unable to upload to pinata");

      }
    }

  };
  const retrieveFile = (e) => {
    const data =e.target.files[0];
      //console.log(data);
     const reader=new window.FileReader();
     reader.readAsArrayBuffer(data);
     reader.onloadend=()=>{
      setFile(e.target.files[0]);
     }
     setFileName(e.target.files[0].name);
     e.preventDefault();
  };

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

