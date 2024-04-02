import React from "react";
import { LampContainer } from "./components/ui/lamp";
import { FloatingNav } from "../src/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import WalletIcon from "/public/wallet-svgrepo-com.svg";
import Spline from '@splinetool/react-spline';

function LampDemo() {
  return (
    <div className="relative">
      <LampContainer>
        <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Mercado<br /><h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl">Own the Future. Mercado NFTs</h2>
        </h1>
      </LampContainer>
      <img src="/public/logoHere2.png" alt="Logo" className="absolute w-68 h-56 right-2 top-32 " />
      <Spline
        className="absolute top-0 right-0 bottom-0 left-0 z-10"
        scene="https://prod.spline.design/tHRctOE2M1c4bO6u/scene.splinecode"
      />
    </div>
  );
}

function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ConnectWallet",
      link: "/wallet",
      icon: <img src={WalletIcon} alt="Wallet" className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} />
      
      <LampDemo />
    </div>
  );
}

export default App;
