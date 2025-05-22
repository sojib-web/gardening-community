import React from "react";
import { useLoaderData } from "react-router";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturedGardeners from "../FeaturedGardeners/FeaturedGardeners";
import TopTrendingTips from "../TopTrendingTips/TopTrendingTips";
import GardeningTools from "../GardeningTools/GardeningTools";
import GardeningEvents from "../GardeningEvents/GardeningEvents";
import Demo from "../ExtraComponents/Demo";
import Loader from "../Loader/Loader"; // ✅ import your spinner

const Home = () => {
  const data = useLoaderData();

  // ✅ Show loader while data is loading
  if (!data?.gardeningData || !data?.topTrendingTips) {
    return <Loader />;
  }

  const { gardeningData, topTrendingTips } = data;

  return (
    <div>
      <BannerSlider />
      <Demo />
      <FeaturedGardeners gardeningData={gardeningData} />
      <TopTrendingTips tips={topTrendingTips} />
      <GardeningTools />
      <GardeningEvents />
    </div>
  );
};

export default Home;
