import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "../Navbar/MobileNavbar";
import { Analytics } from "@vercel/analytics/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" 2xl:px-[154px] text-white bg-[#0E0E10] pb-20 lg:pb-0">
      <nav className="h-full fixed z-40">
        <Navbar />
      </nav>
      <div className="w-full md:pl-[74px]">
        <header className="fixed z-30 w-full 2xl:right-[154px] right-0">
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <nav className="fixed w-full z-40 bottom-0">
        <MobileNavbar />
      </nav>
      <Analytics />
    </div>
  );
};

export default Layout;
