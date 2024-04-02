import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "C:/Users/Prakhar Srivastava/OneDrive/Desktop/ProjectPractice/Test1/src/utils/cn";

export const FloatingNav = ({ navItems, className }) => {
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
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-[#6fe7f7] items-center flex space-x-1 text-neutral-400 dark:hover:text-neutral-300 hover:text-[#6fe7f7]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span className="hidden sm:block text-sm">{navItem.ConnectWallet}</span>
          </a>
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"> */}
          {/* <span className="hidden sm:block text-sm">Login</span> */}
          {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" /> */}
        {/* </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
