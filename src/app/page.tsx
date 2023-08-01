import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SwiperHero from "@/components/Home/SwiperHero";

export default function Home() {
  return (
    <div className=" 2xl:px-[154px] flex">
      <nav className="h-full fixed">
        <Navbar />
      </nav>
      <div className="w-full md:pl-[74px]">
        <header>
          <Header />
        </header>
        <main>
          <SwiperHero />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
