import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LastestUpdateSection from "@/components/Home/LastestUpdateSection";
import PopularSection from "@/components/Home/PopularSection";
import { Suspense } from "react";
import Loading from "@/components/shared/loading";
import Layout from "@/components/shared/Layout";
import SwiperHeroSection from "@/components/Home/SwiperHeroSection";

export default function Home() {
  return (
    <Layout>
      <SwiperHeroSection />
        <LastestUpdateSection />
      <PopularSection />
    </Layout>
  );
}
