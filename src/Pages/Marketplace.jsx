import React, { useState,useEffect } from "react";


import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import { ConditionalBackground } from "../components/ConditionalBackground";
import { useStateContext } from "../contexts";
import { getMetadata } from "../utils/web3Helpers";
import Card from "../components/Card";
import { Gateway_url } from "../../config";



export function Marketplace() {

  const { ERC1155_CONTRACT } = useStateContext();

  const [centerIndex, setCenterIndex] = useState(1);
  const [metadata, setMetadata] = useState([{}]);
  const [metadataHashes, setMetadataHashes] = useState([]);

  useEffect(() => {
      const fetchMetadata = async () => {
      const hashes = await ERC1155_CONTRACT.methods.getAll().call();
      setMetadataHashes(hashes);
      for (let i = 1; i < hashes.length; i++) {
        const data = await getMetadata(Gateway_url,hashes[i]);
        console.log(data)
        setMetadata((prev) => [...prev, data]);
      }
    }
    fetchMetadata();
  },[ERC1155_CONTRACT])
    
    console.log(metadata);
   

  return (
    <div
      className={cn(
        "relative overflow-hidden flex min-h-screen flex-col items-center justify-center z-[5000] bg-slate-950 w-full pt-20"
      )}
    >
      <Navbar />

      <div
        className="relative flex justify-center mt-12"
        style={{ maxWidth: "calc(100% - 32px)" }}
      >
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(0);
          }}
          style={{
            zIndex: centerIndex === 0 ? 2 : 0,
            transform:
              centerIndex === 0 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 0 ? 1 : 0.7,
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="music">
            <Card
              imageUrl="/public/music1.webp"
              title="Music"
              paragraph="Unlock the beats of the future with rare digital music assets."
            />
          </ConditionalBackground>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(1);
          }}
          style={{
            zIndex: centerIndex === 1 ? 2 : 0,
            transform:
              centerIndex === 1 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 1 ? 1 : 0.7, // Increase opacity for selected card
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="arts">
            <Card
              imageUrl="/public/arts.avif"
              title="Arts"
              paragraph="Collect timeless beauty with NFTs crafted by visionary artists."
            />
          </ConditionalBackground>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(2);
          }}
          style={{
            zIndex: centerIndex === 2 ? 2 : 0,
            transform:
              centerIndex === 2 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 2 ? 1 : 0.7,
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="gaming">
            <Card
              imageUrl="/public/gaming.jpg"
              title="Gaming"
              paragraph="Game on with NFTs that make every move legendary."
            />
          </ConditionalBackground>
        </div>
      </div>
    </div>
  );
}
