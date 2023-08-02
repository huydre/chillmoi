import React, {ReactNode} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" 2xl:px-[154px] flex text-white">
      <nav className="h-full fixed">
        <Navbar />
      </nav>
      <div className="w-full md:pl-[74px]">
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;