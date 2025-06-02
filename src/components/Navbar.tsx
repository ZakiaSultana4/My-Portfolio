'use client';
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "work", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achivement", label: "Achivement" },
    { id: "education", label: "Education" },
    { id: "learning", label: "Learning Phase" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScrolled
        ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      {/* Top Bar */}
      <div className="text-white py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={35}
            height={30}
            className="cursor-pointer md:w-[60px] md:h-[50px]"
          />
        </div>

        {/* Center: Resume Button (Mobile Only) */}
        <a href="/Zakia Sultana's Resume.pdf" download className="md:hidden flex justify-center">
          <Button className="bg-[#8245ec] px-3 py-1.5 text-xs gap-1 h-auto">
            Resume <Download size={5} />
          </Button>
        </a>


        {/* Right: Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Desktop: Menu Items */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-gray-300">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`relative transition duration-300 ease-in-out px-3 py-1 rounded-md
      ${activeSection === item.id
                  ? "text-[#8245ec] bg-[#ffffff0a] font-semibold shadow-md"
                  : "text-gray-300 hover:text-[#8245ec] hover:bg-[#ffffff0a]"
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#8245ec] rounded-full transform -translate-x-1/2 translate-y-[8px]" />
              )}
            </button>
          ))}

        </div>

        {/* Desktop: Resume Button */}
        <a
          href="/Zakia Sultana's Resume.pdf"
          download
          className="hidden md:flex justify-end flex-shrink-0"
        >
          <Button className="bg-[#8245ec] flex items-center gap-1">
            Resume <Download size={10} />
          </Button>
        </a>

      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume Button in Mobile Dropdown */}
          <a href="/Zakia Sultana's Resume.pdf" download className="md:hidden flex justify-center">
            <Button className="bg-[#8245ec] px-3 py-1.5 text-xs gap-1 h-auto">
              Resume <Download size={5} />
            </Button>
          </a>


        </div>
      )}
    </nav>
  );
};

export default Navbar;
