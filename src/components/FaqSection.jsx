import * as React from "react";
import { faqItems } from "../data/data";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center self-center mt-20 max-w-full w-[846px] max-md:mt-10">
      <h2 className="text-3xl font-semibold tracking-wide leading-none text-violet-700">
        Frequently asked questions
      </h2>
      <div className="flex flex-col mt-7 w-full">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col p-6 w-full"
            style={{ backgroundColor: '#FAF8FF' }}
            tabIndex="0"
          >
            <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
              <div
                className={`flex-1 shrink my-auto text-2xl font-medium leading-none ${
                  openIndex === index ? "text-[#6B3CC9]" : "text-black"
                } basis-0 max-md:max-w-full`}
              >
                {item.question}
              </div>
              <div
                className="cursor-pointer text-2xl font-semibold text-black"
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? (
                  <span style={{ color: '#6B3CC9' }}>−</span>
                ) : (
                  <span style={{ color: '#6B3CC9' }}>+</span>
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-3.5 text-lg leading-8 text-[#6F6C90] max-md:max-w-full">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
