import logo from './logo.svg';
import './App.css';
import Upload from './artifacts/contracts/Upload.sol/Upload.json';
import {useEffect,useState} from "react";
import {ethers} from "ethers";
import Modal from './components/Modal';
import Display from './components/Display';
import Fileupload from './components/Fileupload';


function App() {

  const [acccounts,setAccount]=useState("");
  const[contract,setContract]=useState(null);
  const[provider ,setProvider]=useState(null);
  const [modalOpen,setModalOpen]=useState(false);

  useEffect(()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

//0x5FbDB2315678afecb367f032d93F642f64180aa3
