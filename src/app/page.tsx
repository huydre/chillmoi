import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LastestUpdateSection from "@/components/Home/LastestUpdateSection";
import PopularSection from "@/components/Home/PopularSection";
import Layout from "@/components/shared/Layout";
import SwiperHeroSection from "@/components/Home/SwiperHeroSection";
import Upcomming from "@/components/Home/Upcomming";

export default function Home() {
  return (
    <Layout>
      <SwiperHeroSection />
      <LastestUpdateSection />
      <PopularSection />
      <Upcomming />
    </Layout>
  );
}
