import * as React from "react";
import { technologies, services } from "../data/data";

export default function Footer() {
  return (
    <footer className="flex flex-col px-20 pt-10 pb-5 mt-20 w-full text-white bg-violet-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col gap-10 w-full max-md:items-center md:flex-wrap md:justify-between">
        {/* Company Info Section */}
        <div className="lg:flex gap-10 w-full justify-between ">
          <div className="flex flex-col text-base min-w-[240px] w-[413px]">
            <img
              loading="lazy"
              src="../images/white logo.png"
              alt="Company Logo"
              className="max-w-full w-[230px]"
            />
            <div className="mt-5">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </div>
          </div>

          {/* Wrapper for Technologies and Services */}
          <div className="flex flex-col w-full gap-10 md:flex-row md:w-auto md:justify-between md:gap-0 lg:mt-0 mt-10 ">
            {/* Technologies Section */}
            <div className="flex flex-col w-[197px] flex-1 max-md:w-full">
              <h3 className="text-xl font-semibold">Our Technologies</h3>
              <div className="flex flex-col self-start mt-3 text-sm font-medium flex-grow">
                {technologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center gap-2 cursor-pointer mt-2"
                  >
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col w-[197px] flex-1 max-md:w-full">
              <h3 className="text-xl font-semibold">Our Services</h3>
              <div className="flex flex-col mt-3 w-full text-sm font-medium flex-grow">
                {services.map((service, index) => (
                  <div key={index} className={index > 0 ? "mt-4" : ""}>
                    <h4 className="cursor-pointer">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Footer Links */}
      <div className="flex flex-col self-center mt-10 max-w-full text-sm font-medium w-[630px] max-md:w-full">
        <div className="w-full border border-white border-solid min-h-[1px] max-md:max-w-full" />
        <div className="flex gap-4 justify-center items-center self-center mt-2 max-md:flex-col max-md:gap-2">
          <button className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">
            Privacy Policy
          </button>
          <div className="shrink-0 self-stretch my-auto w-0 h-4 border border-white border-solid max-md:hidden" />
          <button className="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-white">
            Terms & Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}
