import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";
import { ConditionalBackground } from "../components/ConditionalBackground";
import Card from "../components/Card";

export function Marketplace() {
  const [centerIndex, setCenterIndex] = useState(1);

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center z-[5000] bg-slate-950 w-full"
      )}
    >
      <Navbar />

      <div className="relative flex justify-center mt-12" style={{ maxWidth: "calc(100% - 32px)" }}>
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(0);
          }}
          style={{
            zIndex: centerIndex === 0 ? 2 : 0,
            transform: centerIndex === 0 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 0 ? 1 : 0.7,
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="music">
            <Card />
          </ConditionalBackground>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(1);
          }}
          style={{
            zIndex: centerIndex === 1 ? 2 : 0,
            transform: centerIndex === 1 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 1 ? 1 : 0.7, // Increase opacity for selected card
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="arts">
            <Card />
          </ConditionalBackground>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => {
            setCenterIndex(2);
          }}
          style={{
            zIndex: centerIndex === 2 ? 2 : 0,
            transform: centerIndex === 2 ? "scale(1.2) translateY(-20px)" : "none",
            opacity: centerIndex === 2 ? 1 : 0.7,
            transition: "transform 0.3s, opacity 0.8s, z-index 0.3s",
          }}
        >
          <ConditionalBackground type="gaming">
            <Card />
          </ConditionalBackground>
        </div>
      </div>
    </div>
  );
}