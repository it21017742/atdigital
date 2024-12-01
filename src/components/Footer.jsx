import * as React from "react";
import { technologies, services } from "../data/data";

export default function Footer() {
  return (
    <div className="flex flex-col px-20 pt-10 pb-5 mt-20 w-full text-white bg-violet-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <div className="flex flex-col text-base min-w-[240px] w-[413px] items-start"> {/* Align the logo to the left */}
          <img
            loading="lazy"
            src="../images/white logo.png"
            alt="Company Logo"
            className="object-contain max-w-full aspect-[9.52] w-[239px]"
          />
          <div className="mt-5">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-[197px]">
            <h3 className="text-xl font-semibold">Our Technologies</h3> 
            <div className="flex flex-col self-start mt-3 text-sm font-medium"> 
              {technologies.map((tech) => (
                <div key={tech.id} className="flex items-center gap-2">
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[197px]">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <div className="flex flex-col mt-3 w-full text-sm font-medium">
              {services.map((service, index) => (
                <div key={index} className={index > 0 ? "mt-3" : ""}>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center mt-10 max-w-full text-sm font-medium w-[630px]">
        <div className="w-full border border-white border-solid min-h-[1px] max-md:max-w-full" />
        <div className="flex gap-4 justify-center items-center self-center mt-2">
          <button className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">
            Privacy Policy
          </button>
          <div className="shrink-0 self-stretch my-auto w-0 h-4 border border-white border-solid" />
          <button className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">
            Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
}
