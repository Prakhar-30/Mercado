import React, { useState,useEffect } from 'react';
import Web3 from 'web3';
import { useContractEvents } from 'thirdweb/react';
import { MERCAT_CONTRACT_ADDRESS } from '../constants';
import MercatABI from '../ABIs/Mercat_ABI.json';

const Shop = () => {
  const [ethers, setEthers] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');
  const [MEC, setMEC] = useState(null)
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  
  const [MercatContract, setMercatContract] = useState(null)

  const handlePurchase =async () => {
    if (!ethers || parseFloat(ethers) <= 0 ||!account) {
      setErrorMessage('Please enter valid values for SEPOLIA ethers and amount.');
      return;
    }
    
    // Add your purchase logic here
    const tsx=await MercatContract.methods.buyTokens().send({ from: account, value: ethers * 1000000000000000000 }) 
    console.log(tsx)
    
    // Reset form fields
    setEthers('');
   
    setErrorMessage('');
  };

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const contract = new web3.eth.Contract(MercatABI, MERCAT_CONTRACT_ADDRESS);
          setMercatContract(contract);
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Please install Metamask");
      }
    };
    initializeWeb3();
  }, [])
  
  useEffect(() => {
    const getBalance = async () => {
      if (account && MercatContract) {
        const balance = await MercatContract.methods.balanceOf(account).call();
        setBalance(Number(balance));
      }
    };
    getBalance();
  }, [account, MercatContract]);

  console.log("balance",balance)
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4">Buy Our Platform Token</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <h2 className='mb-4'>Price: 0.001 = 100 MEC</h2>
        
        
        <h2>Balance: {balance} MEC</h2>
        
        <div className="mb-4">
          <label htmlFor="ethers" className="block mb-1">SEPOLIA Ethers:</label>
          <input
            type="number"
            id="ethers"
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600"
            placeholder="Enter SEPOLIA Ethers"
            value={ethers}
            onChange={(e) => setEthers(e.target.value)}
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="amount" className="block mb-1">Amount of Tokens:</label>
          <input
            type="number"
            id="amount"
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div> */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold transition duration-300"
          onClick={handlePurchase}
        >
          Purchase Tokens
        </button>
      </div>
    </div>
  );
};

export default Shop;
