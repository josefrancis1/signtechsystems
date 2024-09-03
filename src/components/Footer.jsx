import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillInstagram className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillLinkedin className="group-hover:text-white w-5 h-5" />,
  },
];

const quickLinks1 = [
  { path: "/", display: "Home" },
  { path: "/", display: "Services" },
  { path: "/", display: "About Us" },
  { path: "/", display: "Blog" },
];

const quickLinks2 = [
  { path: "/", display: "Christ College Jn, Thrissur Road ,Irinjalakuda" },
  { path: "/", display: "+91 9846622044" },
  // { path: "/", display: "+91 8592980180" },
  { path: "/", display: "singtechsystems2011@gmail.com" },
];

const quickLinks3 = [
  { path: "/", display: "Support" },
  { path: "/", display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Logo and Social Links */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <img className="w-[50px] md:w-[70px]" src={logo} alt="Logo" ></img>
            <h2 className="text-lg font-bold mb-4">Follow us</h2>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-10 h-10 border border-white rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-transparent"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm mt-4">
              Copyright &copy; {year} developed by Sreekumar Krishnan. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks1.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm hover:underline"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <ul className="space-y-2">
              {quickLinks2.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm hover:underline"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Help</h2>
            <ul className="space-y-2">
              {quickLinks3.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm hover:underline"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
