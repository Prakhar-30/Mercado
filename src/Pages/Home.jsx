import React from "react";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import GlowingButton from "../components/GlowingButton";
import AnimatedText from "../components/AnimatedDiv";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";

export function Home() {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full"
      )}
    >
      <Navbar />

      <div className="flex justify-between mt-56">
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

      <div class="text-slate-400 text-6xl text-center mt-10 border border-slate-600 rounded-3xl pt-32 pb-32 pl-2 pr-2 mb-6 ml-1 mr-1">
        Unlock the potential of digital ownership with Mercado
      </div>

      <div className="Details">
        <div className=" text-slate-400 text-8xl mt-20 min-w-full  ml-8">
          Artists
        </div>
        <div className="flex mt-11">
          <div className="ml-4 mt-6 text-center w-3/5">
            <AnimatedText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, quo! Dolore distinctio error consequuntur, accusamus qui
              quis nulla reprehenderit. Quos, veniam at ipsum labore expedita
              fugit dolor debitis dolorum dolores?
            </AnimatedText>
          </div>
          <div className="text-center w-2/5 pl-8">
            <BackgroundGradientDemo>
              <div className="border rounded-lg">
                <img 
                className="size-80"
                src="/public/ArtistImage.jpeg" alt="logo" />
              </div>
            </BackgroundGradientDemo>
          </div>
        </div>
        <div className="ml-4">
          <GlowingButton text="Enter as Artist" />
        </div>
      </div>

      <div className="Details p-2">
  <div className="flex justify-end">
    <div className="text-slate-400 text-8xl mt-20 min-w-full text-right mr-8">
      Creators
    </div>
  </div>

  <div className="flex mt-11">
    <div className="text-center w-2/5 pr-8">
      <BackgroundGradientDemo>
        <div className="border rounded-lg">
          <img 
          className="size-80"
          src="/public/Creators.jpg" alt="logo" />
        </div>
      </BackgroundGradientDemo>
    </div>
    <div className="mr-4 mt-6 text-center w-3/5">
      <AnimatedText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
        quo! Dolore distinctio error consequuntur, accusamus qui quis nulla
        reprehenderit. Quos, veniam at ipsum labore expedita fugit dolor
        debitis dolorum dolores?
      </AnimatedText>
    </div>
  </div>
  <div className="flex justify-end mt-0">
    <div className="mr-4 mt-0">
      <GlowingButton text="Enter as Creator" />
    </div>
  </div>
</div>

    </div>
  );
}
