// @ts-nocheck
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import image from "../../assets/cardIamge.jpg";
import imgge2 from "../../assets/Image3.jpg";

const GardeningEvents = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  return (
    <section className="bg-green-900 mt-20 py-16 text-white relative overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-yellow-200 font-semibold flex items-center justify-center gap-2">
          <span className="text-lg">🌿</span> Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We’re Awards Winning Gardening
        </h2>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="bg-white text-black shadow-xl p-8 w-full rounded-2xl max-w-6xl flex flex-col lg:flex-row items-center gap-10">
          {/* Right Side Image */}
          <div className="lg:order-2 w-full lg:w-1/2">
            <img
              src={imgge2}
              alt="Gardening"
              className="rounded-2xl object-cover w-full h-full max-h-[600px]"
            />
          </div>

          {/* Left Side Content */}
          <div className="lg:order-1 w-full lg:w-1/2">
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-300 mb-6">
              <button
                onClick={() => setActiveTab("tab1")}
                className={`pb-2 border-b-2 ${
                  activeTab === "tab1"
                    ? "border-green-600 text-green-700 font-bold"
                    : "border-transparent text-gray-600 hover:text-green-700 hover:border-green-600"
                }`}
              >
                We’re Since 1987!
              </button>
              <button
                onClick={() => setActiveTab("tab2")}
                className={`pb-2 border-b-2 ${
                  activeTab === "tab2"
                    ? "border-green-600 text-green-700 font-bold"
                    : "border-transparent text-gray-600 hover:text-green-700 hover:border-green-600"
                }`}
              >
                Philosophy
              </button>
            </div>

            {/* Tab Content */}
            <div className="mb-6 text-gray-700">
              {activeTab === "tab1" && (
                <div>
                  At <span className=" text-green-700 ">Garden Connects</span>,
                  we’ve been nurturing nature since 1987! With over three
                  decades of experience, we specialize in creating beautiful,
                  sustainable gardens that thrive. Whether you're looking for
                  expert landscaping, seasonal planting, or garden maintenance,
                  our dedicated team brings passion, knowledge, and a green
                  thumb to every project.
                </div>
              )}
              {activeTab === "tab2" && (
                <div>
                  At <span className=" text-green-700 ">Garden Connects</span>,
                  we believe gardening is more than just planting—it's about
                  cultivating life, harmony, and lasting beauty. Since 1987, our
                  philosophy has been rooted in respect for nature,
                  sustainability, and the joy of growing. We see every garden as
                  a living canvas, shaped by the seasons and the soul of those
                  who tend it.
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="flex items-start gap-4">
              <img
                src={image}
                alt="Gardener"
                className="rounded-lg object-cover w-30 "
              />
              <ul className="text-sm space-y-3 text-black">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4" /> Trusted
                  Gardening Partners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4" /> Shipping
                  Cost Low
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4" />{" "}
                  Professional Team Member
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4" /> Awards
                  Winning Company
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardeningEvents;
