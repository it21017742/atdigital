import * as React from "react";

const ServiceCard = ({ title, description, imageUrl, imageFirst }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        imageFirst ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-50 items-center sm:items-start my-auto min-w-[240px] w-full sm:w-auto px-10 lg:mt-10 md:mt-10 sm:mt-5`} // Added horizontal padding (px-5)
    >
      {/* Image Section */}
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain self-center sm:self-stretch my-5 sm:my-auto aspect-square min-w-[240px] sm:w-[414px] max-w-full"
      />

      {/* Text Content */}
      <div className="flex flex-col items-center sm:items-start self-stretch my-auto min-w-[240px] w-full sm:w-auto text-center sm:text-left">
        <div className="max-w-full text-3xl font-semibold tracking-wide leading-none text-violet-700 w-full">
          {title}
        </div>
        <div className="self-stretch mt-5 text-base text-black w-full">
          {description}
        </div>
        <button
          className="gap-2 px-10 py-3 mt-5 text-sm font-bold tracking-tight leading-none text-white uppercase bg-orange-400 rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          tabIndex="0"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
