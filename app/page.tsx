import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import { Right } from "@/components/Right";

import Image from "next/image";

export default function Home() {
  return (
    <h1>
      <Navbar />
      <div className="flex"> 
        <SideBar />
        <Right/>
    
      </div>
    </h1>
  );
}
