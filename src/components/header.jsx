import * as React from "react";
import { useState } from "react";
import { navigationLinks } from "../data/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-20 py-7 w-full text-sm font-medium text-white bg-violet-700 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="../images/white logo.png"
        alt="Company Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[9.52] w-[239px]"
      />

      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {!isMenuOpen ? (
            <div>
              <span className="block w-6 h-1 bg-white mb-2"></span>
              <span className="block w-6 h-1 bg-white mb-2"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </div>
          ) : (
            <span className="text-white text-3xl">×</span>
          )}
        </button>
      </div>
      <nav className="hidden sm:flex gap-7 items-start self-stretch my-auto min-w-[240px]">
        {navigationLinks.map((link) => (
          <button
            key={link.id}
            className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            tabIndex="0"
          >
            {link.text}
          </button>
        ))}
      </nav>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center py-10 sm:hidden`}
      >
        <div className="w-full flex justify-end pr-8">
          <button onClick={toggleMenu} className="text-3xl text-black">
            ×
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-black text-lg font-semibold"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
