import React, { useState } from 'react';
import { useContractEvents } from 'thirdweb/react';

const Shop = () => {
  const [ethers, setEthers] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePurchase = () => {
    if (!ethers || !amount || parseFloat(ethers) <= 0 || parseFloat(amount) <= 0) {
      setErrorMessage('Please enter valid values for SEPOLIA ethers and amount.');
      return;
    }
    
    // Add your purchase logic here
    console.log(`Purchasing ${amount} tokens with ${ethers} SEPOLIA ethers.`);
    
    // Reset form fields
    setEthers('');
    setAmount('');
    setErrorMessage('');
  };

  const contractEvents=useContractEvents({})
  console.log(contractEvents);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4">Buy Our Platform Token</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
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
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-1">Amount of Tokens:</label>
          <input
            type="number"
            id="amount"
            className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
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
