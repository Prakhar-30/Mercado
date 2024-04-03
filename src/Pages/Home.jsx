import React from "react";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import GlowingButton from "../components/GlowingButton";

export function Home() {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-auto bg-slate-950 w-full"
      )}
    >
      <Navbar />

      <div className="!flex justify-between mt-56">
        <div className="text-slate-400 text-7xl p-8 ml-24 mr-60">
          Welcome to Mercado, where the future is yours to own.
        </div>
        <div className="flex justify-center w-full right-0 pr-0 ml-0">
          <img src="/public/logoHere2.png" alt="logo" />
        </div>
      </div>
      <div className="text-slate-400 text-2xl p-8 ml-24 mr-60">
        Empowering you to create, buy, and sell NFTs effortlessly. Join us in
        shaping the future of digital ownership.
      </div>
      <div className="mb-48">
        <div className="absolute left-32">
          <GlowingButton text="Explore MarketPlace" />
        </div>
      </div>

      <div class="text-slate-400 text-6xl text-center mt-10 border border-slate-600 rounded-3xl pt-32 pb-32 mb-6 ml-1 mr-1">
        Unlock the potential of digital ownership with Mercado
      </div>
    </div>
  );
}
