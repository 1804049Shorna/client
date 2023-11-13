import './App.css';
import Upload from './artifacts/contracts/Upload.sol/Upload.json';
import {useEffect,useState} from "react";
import {ethers} from "ethers";
import Modal from './components/Modal';
import Display from './components/Display';
import Fileupload from './components/Fileupload';


function App() {

  const [account,setAccount]=useState("");
  const[contract,setContract]=useState(null);
  const[provider ,setProvider]=useState(null);
  const [modalOpen,setModalOpen]=useState(false);

  useEffect(()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);

  
  const loadprovider=async()=>{
    if (provider) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      await provider.send("eth_requestAccounts",[]);
      const signer=provider.getSigner();
      const address=await signer.getAddress();
      setAccount(address);
      let constractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract=new ethers.Contract(constractAddress,Upload.abi,signer);
      
      console.log(contract);
      setContract(contract);
      setProvider(provider);

    }
    else{
      console.log("error");
    }
  };
 
  //console.log("Hello");
  provider && loadprovider();
},[]);


  return (
    <div className="App">
      <h1 >Gdrive 3.0</h1>
      <div class="bg"></div>
      <div class="bg 1"></div>
      <div class="bg 2"></div>
      <p>Account : {account ? account : "Please connect Metamask"}</p>
      <Fileupload account={account} provider={provider} contract={contract}></Fileupload>
    </div>
  );
}

export default App;

//0x5FbDB2315678afecb367f032d93F642f64180aa3
