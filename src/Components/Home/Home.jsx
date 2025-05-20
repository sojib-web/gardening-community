import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturedGardeners from "../FeaturedGardeners/FeaturedGardeners";
import TopTrendingTips from "../TopTrendingTips/TopTrendingTips";
import GardeningTools from "../GardeningTools/GardeningTools";
import GardeningEvents from "../GardeningEvents/GardeningEvents";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <FeaturedGardeners></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <GardeningTools></GardeningTools>
      <GardeningEvents></GardeningEvents>
    </div>
  );
};

export default Home;
