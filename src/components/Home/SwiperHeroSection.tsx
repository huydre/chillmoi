import React from 'react'
import SwiperHero from './SwiperHero'
import getTrendingAll from "../../../api/getTrendingAll"

export default async function SwiperHeroSection() {
    const trending = await getTrendingAll(1);
  return (
    <SwiperHero data={trending.results.slice(0,8)}/>
  )
}
