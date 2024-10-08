import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundGradientDemo } from "../../components/BackgroundGradientDemo";
import Spline from "@splinetool/react-spline";
import { useStateContext } from "../../contexts";


const Shop = () => {
  const [ethers, setEthers] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [balance, setBalance] = useState(null);

  const { MercatContract, account,ERC1155_CONTRACT } = useStateContext();
  

  const handlePurchase = async () => {
    if (!ethers || parseFloat(ethers) <= 0 || !account) {
      setErrorMessage(
        "Please enter valid values for SEPOLIA ethers and amount."
      );
      return;
    }

    // Add your purchase logic here
    const tsx = await ERC1155_CONTRACT.methods.
    convertETHToMERCAT()
      .send({ from: account, value: ethers * 1000000000000000000 });
    // Reset form fields
    setEthers("");

    setErrorMessage("");
  };

  
  useEffect(() => {
    const getBalance = async () => {
      if (account && MercatContract) {
        const balance = await MercatContract.methods.balanceOf(account).call();
        setBalance(Number(balance)/1000000000000000000);
      }
    };
    getBalance();
  }, [account, MercatContract]);


  return (
    <>
        <Spline
        className="absolute top-0 right-0 bottom-0 left-0 "
        scene="https://prod.spline.design/tHRctOE2M1c4bO6u/scene.splinecode"
      />
    <div className="min-h-screen flex items-center justify-center bg-gray-900 z-[5000]">
      <BackgroundGradientDemo>
      <div className="bg-gray-800 p-2 rounded-lg shadow-lg size-80">
        <h1 className="text-2xl text-slate-100 font-semibold mt-6 mb-2">Buy Our Platform Token</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <h2 className="mb-4 text-slate-500">Price: 0.001 = 1 MEC</h2>

        <h2 className="text-slate-500">Balance: {balance} MEC</h2>
        

        <div className="mb-4">
          <label htmlFor="ethers" className="block mb-1 text-slate-500">
            SEPOLIA Ethers:
          </label>
          <input
            type="number"
            id="ethers"
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600 mb-2"
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
    <div className="absolute bottom-1 right-0">
        <img src="/public/logoHere2.png" alt="logo" />
      </div>
    </>

  );
};

export default Shop;
