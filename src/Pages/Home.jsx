import React from "react";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import GlowingButton from "../components/GlowingButton";
import AnimatedText from "../components/AnimatedDiv";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";

export function Home() {
  return (
    <>
      <style>
        {`
          /* Hide scrollbar but allow scrolling */
          ::-webkit-scrollbar {
            width: 10px; /* Width of the scrollbar */
            display: none; /* Hide scrollbar */
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #f1f1f1; 
          }
          
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius: 5px; 
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555; 
          }
        `}
      </style>

      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center justify-center overflow-y-scroll z-[5000] bg-slate-950 w-full"
        )}
      >
        <Navbar />

        <div className="flex justify-between mt-44">
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

        <div class=" text-slate-400 text-6xl text-center mt-10 border border-slate-600 rounded-3xl pt-32 pb-32 pl-2 pr-2 mb-6 ml-1 mr-1">
          Unlock the potential of digital ownership with Mercado
        </div>
        <div className="Details">
          <div className=" text-slate-400 text-8xl mt-20 min-w-full  ml-8">
            Artists
          </div>
          <div className="flex mt-11">
            <div className="ml-2 mt-6 text-center w-3/5">
              <AnimatedText>
                Welcome to Mercado, where creativity finds its true value. As an Artist in the realms of Game Development, Music, or Visual Arts, your talents are the driving force behind the digital revolution. At Mercado, we empower artists like you to showcase your work to a global audience of Collectors and enthusiasts. Whether you're a seasoned professional or an emerging talent, Mercado provides a platform for you to connect with a community that appreciates and values your unique creations. By joining Mercado as an artist, you gain access to a vibrant marketplace where your ideas come to life as non-fungible tokens (NFTs), revolutionizing the way digital assets are bought, sold, and owned. Seize this opportunity to shape the future of digital ownership and redefine the boundaries of artistic expression.
              </AnimatedText>
            </div>
            <div className="text-center w-2/5 pl-8">
              <BackgroundGradientDemo>
                <div className="border rounded-lg">
                  <img
                    className="size-80"
                    src="/public/ArtistImage.jpeg"
                    alt="logo"
                  />
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
                    src="/public/Creators.jpg"
                    alt="logo"
                  />
                </div>
              </BackgroundGradientDemo>
            </div>
            <div className="mr-2 mt-6 text-center w-3/5">
              <AnimatedText>
                Become a Pioneer of the digital frontier with Mercado. As a Creator, you hold the key to unlocking the limitless possibilities of non-fungible tokens (NFTs). Whether you specialize in digital art, collectibles, or innovative experiences, Mercado provides the tools and resources you need to transform your creations into valuable assets in the burgeoning NFT marketplace. By minting your work as NFTs on Mercado, you gain exposure to a diverse audience of collectors eager to invest in the next generation of digital collectibles. Our user-friendly platform simplifies the process of minting and selling NFTs, allowing you to focus on what you do best: creating. Join Mercado today and embark on a journey where your imagination knows no bounds, and your creations become a cornerstone of the digital economy.
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
    </>
  );
}
