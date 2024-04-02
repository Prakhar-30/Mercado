import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import WalletIcon from "/public/wallet-svgrepo-com.svg";
import { NavbarItem } from "./NavbarItem";

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
    icon: (
      <img
        src={WalletIcon}
        alt="Wallet"
        className="h-4 w-4 text-neutral-500 dark:text-white"
      />
    ),
  },
];

export const Navbar = ({ className }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#000000] bg-[#1f131382] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 p-2",
          className
        )}
      >
        {navItems.map((navItem) => (
          <NavbarItem navItem={navItem} key={navItem.name} />
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"> */}
        {/* <span className="hidden sm:block text-sm">Login</span> */}
        {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" /> */}
        {/* </button> */}
      </motion.div>
    </AnimatePresence>
  );
};