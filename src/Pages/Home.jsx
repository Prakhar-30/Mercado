import React from "react";
import { Navbar } from "../components/Navbar";
import { cn } from "../utils/cn";

export function Home() {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0"
      )}
    >
      <Navbar />
      
    </div>
  );
}
