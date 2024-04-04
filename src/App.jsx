import React from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { LampDemo } from "./components/LampDemo";
import { Navbar } from "./components/Navbar";
// import { Home } from "./Pages/Home";
import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Shop from "./web3/pages/Shop";
// import { sepolia } from "thirdweb/chains";
import ConnectWalletButton from "./components/ConectButton";
import CreateNFT from "./web3/pages/CreateNFT";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "279bdbf9028501a51bf797ada51321ac" 
});

// connect to your contract
// export const contract = getContract({ 
//   client, 
//   chain: sepolia, 
//   address: "0x..."
// });
//9wEdbyUSM80crdJwxUoRVUSmEwDXOvNJxVYW3ypP552qSDwpxxprAblKpSc1E_Rs5O3BnKNGgNBqNIR_mtJbSQ --Thirdweb Api secret key

window.ethereum.on("accountsChanged", (accounts) => {
  // reload the page to get the latest account
  window.location.reload();
  console.log("accounts changed", accounts);
});

window.ethereum.on("chainChanged", (chainId) => {

  // reload the page to get the latest account
  window.location.reload();
  console.log("chain changed", chainId);
});

function App() {
  return (
    <ThirdwebProvider 
      client={client}
    >
   
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LampDemo />} />
        <Route path="/about" element={<LampDemo />} />
        <Route path="/contact" element={<LampDemo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/createNFT" element={<CreateNFT />} />
      </Routes>
      
      <ConnectWalletButton />

    </div>
    
    </ThirdwebProvider>
  );
}

export default App;



