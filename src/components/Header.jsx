import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/contact",
      display: "Contact Us",
    }
  ];

  return (
    <header className="header flex items-center h-[80px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo-container">
            <img className="w-[100px]" src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-[2.7rem]">
            {/* Desktop Menu */}
            <ul className="menu hidden md:flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-green-700 text-[16px] leading-7 font-[600]"
                        : "text-green-500 text-[16px] leading-7 font-[500] hover:text-green-700"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden flex items-center text-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              className="text-green-500 p-2"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2">
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-green-700 text-[16px] leading-7 font-[600]"
                      : "text-green-500 text-[16px] leading-7 font-[500] hover:text-green-700"
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu after navigation
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

