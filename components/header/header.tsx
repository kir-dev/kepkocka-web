"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrolltoElement = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setMenuOpen(false);
  };
  return (
    <div
      className={`w-full py-4 fixed top-0 left-0 z-50 transition-all flex flex-row justify-between md:items-center px-7 ${
        scrolled ? "bg-white text-black" : "text-white bg-transparent"
      } ${menuOpen && "items-start pt-4"}`}
    >
      <p className="text-3xl font-semibold uppercase inline-block ">Képkocka</p>
      <div className="md:flex flex-row items-center hidden">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => scrolltoElement(item.href)}
            className="text-sm uppercase mx-3 my-5 inline-block align-middle hover:underline cursor-pointer"
          >
            {item.name}
          </div>
        ))}
        <img
          src={scrolled ? "/img/logo-black.png" : "/img/logo.png"}
          alt="logo"
          className="w-9 h-9 contain-content ml-12"
        />
      </div>
      <div className="flex flex-col md:hidden">
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
            setScrolled(true);
          }}
        >
          <img
            src={scrolled ? "/img/logo-black.png" : "/img/logo.png"}
            alt="logo"
            className="w-9 h-9 contain-content ml-12 cursor-pointer"
          />
        </div>
        <div
          className={`md:hidden flex flex-col items-end overflow-hidden transition-all duration-500 ease-in-out mt-2 ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => scrolltoElement(item.href)}
              className="text-sm uppercase mx-3 my-2 inline-block align-middle hover:underline cursor-pointer transition-opacity duration-500 delay-200"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const menuItems: MenuItem[] = [
  {
    name: "Megbízás",
    href: "kontakt-holder",
  },
  {
    name: "Projektek",
    href: "nyito-holder",
  },
  {
    name: "Rólunk",
    href: "bemutatkozas-holder",
  },
  {
    name: "Fotók",
    href: "fotok-holder",
  },
  {
    name: "Videók",
    href: "videok-holder",
  },
  {
    name: "Kontakt",
    href: "kontakt-holder",
  },
];
type MenuItem = {
  name: string;
  href: string;
};
