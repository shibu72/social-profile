"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Content from "./content";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Content />
      <BackgroundBeams className="contrast-150 h-screen" />
    </div>
  );
}
