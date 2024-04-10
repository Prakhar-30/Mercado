import React, { useState,useEffect } from 'react';
import axios from 'axios';
import FileUpload from '../../components/FileUpload';
import {  Gateway_url } from "../../../config";
import { getContract } from 'thirdweb';
import Web3 from "web3"
import ERC1155_ABI from "../../web3/ABIs/ERC1155_ABI.json"
import { client } from '../../App';
import {ERC1155_CONTRACT_ADDRESS} from "../../web3/constants";




function CreateNFT() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ipfsHash, setIpfsHash] = useState('');
    const [metadataHash, setMetadataHash] = useState('');
    const [error, setError] = useState('');
    const [account, setAccount] = useState(null);
    const [metadata, setMetadata] = useState({}); // 


    const [ERC1155_CONTRACT, setERC1155_CONTRACT] = useState(null);

    
    // const address=useActiveAccount();
    // const CurrentAddress=address?.address;
    // console.log(CurrentAddress)
    
   


    //Function To get the data from metadataHash by making a request
    const getMetadata = async () => {
        try {
            const res = await axios.get(`${Gateway_url}/ipfs/${metadataHash}`);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(async () => {

        //getting the erc1155 contract
        const StoringMetaData = async () => {
        if(metadataHash){
           const data= await getMetadata();
           setMetadata(data);
        }
    }
    StoringMetaData();
    },[metadataHash]) 

    //getting the erc1155 contract
    
    useEffect(() => {
        const initializeWeb3 = async () => {
          if (typeof window.ethereum !== "undefined") {
            const web3 = new Web3(window.ethereum);
            try {
              await window.ethereum.request({ method: "eth_requestAccounts" });
              const accounts = await web3.eth.getAccounts();
              setAccount(accounts[0]);
              const contract = new web3.eth.Contract(
                ERC1155_ABI,
                ERC1155_CONTRACT_ADDRESS
              );
              setERC1155_CONTRACT(contract);
            } catch (error) {
              console.error(error);
            }
          } else {
            alert("Please install Metamask");
          }
        };
        initializeWeb3();
      }, []);
      

    // Minting with MetadataHash
    useEffect( () => {
        const Minting =async ()=> {
        if (metadataHash && ERC1155_CONTRACT) {
            setLoading(true);
            try {
                const tx = await ERC1155_CONTRACT.methods.mint(CurrentAddress,3,5,metadataHash).send({ from:CurrentAddress });
                console.log(tx);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }
    }
    Minting();
    },[metadataHash])

    
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-white mb-4">Create NFT</h1>
                
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading ? (
                    <p className="text-white">Uploading...</p>
                ) : (
                    <FileUpload
                        ipfsHash={ipfsHash}
                        setIpfsHash={setIpfsHash}
                        metadataHash={metadataHash}
                        setMetadataHash={setMetadataHash}
                    />
                )}
                {ipfsHash && (
                    <p className="text-white mt-4">IPFS Hash: {ipfsHash}</p>
                )}
                {metadata && (
                    <p className="text-white mt-4">Metadata : {metadata.name}</p>
                )}
            </div>
        </div>
    );
}

export default CreateNFT;
