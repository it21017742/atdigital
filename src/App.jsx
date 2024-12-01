import * as React from "react";
import Header from "./components/header";
import ServiceCard from "./components/ServiceCard";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { serviceCard } from "./data/data";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      {/* Hero Section with Text and Button Overlay */}
      <div className="relative">
        <img
          loading="lazy"
          src="../images/landingOne.png"
          alt="Hero Banner"
          className="object-contain w-full aspect-[2.06] max-md:max-w-full"
        />
        {/* Absolute div for larger screens */}
        <div className="absolute bottom-10 left-20 p-6 bg-gradient-to-r from-[#47c884]/80 to-[#2f92d1]/80 max-w-lg hidden md:block">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h1>
            <button className="bg-[#f28d35] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg duration-300">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>

        {/* Full-width div for smaller screens */}
        <div className="block md:hidden w-full p-6 bg-gradient-to-r from-[#47c884]/80 to-[#2f92d1]/80">
          <div className="text-white text-left">
            <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h1>
            <button className="bg-[#f28d35] hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-md shadow-lg duration-300">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        {serviceCard.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
      <FaqSection />
      <Footer />
    </div>
  );
}
/*finalized*/
