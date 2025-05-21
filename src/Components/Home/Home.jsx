import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturedGardeners from "../FeaturedGardeners/FeaturedGardeners";
import TopTrendingTips from "../TopTrendingTips/TopTrendingTips";
import GardeningTools from "../GardeningTools/GardeningTools";
import GardeningEvents from "../GardeningEvents/GardeningEvents";
import { useLoaderData } from "react-router";
import Demo from "../ExtraComponents/Demo";

const Home = () => {
  const { gardeningData, topTrendingTips } = useLoaderData();

  console.log(gardeningData);

  return (
    <div className="">
      <BannerSlider />
      <Demo></Demo>
      <FeaturedGardeners gardeningData={gardeningData} />
      <TopTrendingTips tips={topTrendingTips} />
      <GardeningTools />
      <GardeningEvents />
    </div>
  );
};

export default Home;
