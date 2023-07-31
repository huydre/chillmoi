import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <nav className="h-full">
        <Navbar />
      </nav>
      <div>
        <header>
          <Header />
        </header>
        <main></main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
