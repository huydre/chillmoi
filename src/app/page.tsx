import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SwiperHero from "@/components/Home/SwiperHero";
import LastestUpdateSection from "@/components/Home/LastestUpdateSection";
import PopularSection from "@/components/Home/PopularSection";
import { Suspense } from "react";
import Loading from "@/components/shared/loading";
import Layout from "@/components/shared/Layout";

export default function Home() {
  return (
    <Layout>
      <SwiperHero />
      <Suspense fallback={<Loading />}>
        <LastestUpdateSection />
      </Suspense>
      <PopularSection />
    </Layout>
  );
}
