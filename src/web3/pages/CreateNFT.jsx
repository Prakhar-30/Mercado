import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNFTs } from "@thirdweb-dev/react";

import FileUpload from '../../components/FileUpload';
import { Gateway_url } from "../../../config";
import { getContract } from 'thirdweb';
import Web3 from "web3"
import ERC1155_ABI from "../../web3/ABIs/ERC1155_ABI.json"
import {getMetadata} from "../../utils/web3Helpers"
import { client } from '../../App';
import { ERC1155_CONTRACT_ADDRESS } from "../../web3/constants";
import { useStateContext } from '../../contexts';

function CreateNFT() {

    const {ERC1155_CONTRACT,setERC1155_CONTRACT,account,setAccount}=useStateContext();

    const [loading, setLoading] = useState(false);
    const [ipfsHash, setIpfsHash] = useState('');
    const [metadataHash, setMetadataHash] = useState('');
    const [error, setError] = useState('');
    const [metadata, setMetadata] = useState(null);
    
    
    // const [createdNFTs, setCreatedNFTs] = useState({});
    const [quantity, setQuantity] = useState(1);

    

    

    useEffect(() => {
        if (metadataHash) {
            getMetadata(Gateway_url,metadataHash).then(data => setMetadata(data));
        }
    }, [metadataHash]);


    const handleMintNFT = async () => {
        if (metadataHash && ERC1155_CONTRACT && account) {
            setLoading(true);
            try {
                 await ERC1155_CONTRACT.methods.mintNFT(account,quantity, metadataHash).send({ from: account });
                setLoading(false);
                alert("NFTs Minted successfully!");
                
                
                // setCreatedNFTs(prevState => ({
                //     ...prevState,
                //     [creatorAddress]: [...(prevState[creatorAddress] || []), newNFT]
                // }));
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }
    };
   

    


    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-white mb-4">Create NFT</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading ? (
                    <p className="text-white">Processing...</p>
                ) : (
                    <FileUpload
                        ipfsHash={ipfsHash}
                        setIpfsHash={setIpfsHash}
                        metadataHash={metadataHash}
                        setMetadataHash={setMetadataHash}
                    />
                )}
                {metadata && (
                    <>
                    {console.log(metadata)}
                    <p className="text-white mt-4">Name: {metadata.name}</p>
                    <p className="text-white mt-4">Description: {metadata.description}</p>
                    <p className="text-white mt-4">Theme: {metadata.theme}</p>
                    </>
                )}
                {metadataHash && (
                    <>
                        <input
                            type="number"
                            className="mt-4 w-full px-3 py-2 border border-gray-300 rounded"
                            placeholder="Enter quantity"
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleMintNFT}
                            disabled={!metadataHash || !ERC1155_CONTRACT || !account}
                        >
                            Mint NFT
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CreateNFT;
