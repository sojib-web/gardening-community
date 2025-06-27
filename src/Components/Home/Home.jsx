import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import BannerSlider from "../BannerSlider/BannerSlider";
import FeaturedGardeners from "../FeaturedGardeners/FeaturedGardeners";
import TopTrendingTips from "../TopTrendingTips/TopTrendingTips";
import GardeningTools from "../GardeningTools/GardeningTools";
import GardeningEvents from "../GardeningEvents/GardeningEvents";
import Demo from "../ExtraComponents/Demo";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Home = () => {
  const data = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);
  const { gardeningData, topTrendingTips } = data;

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-green-800 text-black"
      }`}
    >
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
