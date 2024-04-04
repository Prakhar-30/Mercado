import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useContractEvents } from "thirdweb/react";
import { MERCAT_CONTRACT_ADDRESS } from "../constants";
import MercatABI from "../ABIs/Mercat_ABI.json";
import { motion } from "framer-motion";
import { BackgroundGradientDemo } from "../../components/BackgroundGradientDemo";



const Shop = () => {
  const [ethers, setEthers] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [MEC, setMEC] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const [MercatContract, setMercatContract] = useState(null);

  const handlePurchase = async () => {
    if (!ethers || parseFloat(ethers) <= 0 || !account) {
      setErrorMessage(
        "Please enter valid values for SEPOLIA ethers and amount."
      );
      return;
    }

    // Add your purchase logic here
    const tsx = await MercatContract.methods
      .buyTokens()
      .send({ from: account, value: ethers * 1000000000000000000 });
    console.log(tsx);

    // Reset form fields
    setEthers("");

    setErrorMessage("");
  };

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const contract = new web3.eth.Contract(
            MercatABI,
            MERCAT_CONTRACT_ADDRESS
          );
          setMercatContract(contract);
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Please install Metamask");
      }
    };
    initializeWeb3();
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      if (account && MercatContract) {
        const balance = await MercatContract.methods.balanceOf(account).call();
        setBalance(Number(balance));
      }
    };
    getBalance();
  }, [account, MercatContract]);

  console.log("balance", balance);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <BackgroundGradientDemo>
      <div className="bg-gray-800 p-2 rounded-lg shadow-lg size-80">
        <h1 className="text-2xl text-slate-100 font-semibold mt-12 mb-4">Buy Our Platform Token</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <h2 className="mb-4 text-slate-500">Price: 0.001 = 100 MEC</h2>

        <h2 className="text-slate-500">Balance: {balance} MEC</h2>
        

        <div className="mb-4">
          <label htmlFor="ethers" className="block mb-1 text-slate-500">
            SEPOLIA Ethers:
          </label>
          <input
            type="number"
            id="ethers"
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600"
            placeholder="Enter SEPOLIA Ethers"
            value={ethers}
            onChange={(e) => setEthers(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <motion.button
            whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)" }}
            className="text-zinc-200 bg-transparent border border-zinc-200 hover:bg-neon-blue hover:text-white px-4 py-2 rounded-2xl transition duration-300"
            onClick={handlePurchase}
          >
            Purchase Tokens
          </motion.button>
        </div>
      </div>
      </BackgroundGradientDemo>
    </div>

  );
};

export default Shop;
