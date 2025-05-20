import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturedGardeners from "../FeaturedGardeners/FeaturedGardeners";
import TopTrendingTips from "../TopTrendingTips/TopTrendingTips";
import GardeningTools from "../GardeningTools/GardeningTools";
import GardeningEvents from "../GardeningEvents/GardeningEvents";
import { useLoaderData } from "react-router";

const Home = () => {
  const gardeningData = useLoaderData();
  console.log(gardeningData);
  return (
    <div>
      <BannerSlider></BannerSlider>
      <FeaturedGardeners gardeningData={gardeningData}></FeaturedGardeners>
      <TopTrendingTips></TopTrendingTips>
      <GardeningTools></GardeningTools>
      <GardeningEvents></GardeningEvents>
    </div>
  );
};

export default Home;
