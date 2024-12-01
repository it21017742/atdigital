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
      <img
        loading="lazy"
        src="../images/landingOne.png"
        alt="Hero Banner"
        className="object-contain w-full aspect-[2.06] max-md:max-w-full"
      />
      <div className="flex-grow w-full">
        {serviceCard.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
      <FaqSection />
      <Footer />
    </div>
  );
}
