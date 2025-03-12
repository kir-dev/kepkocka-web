"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <div
      className={`w-full h-16 fixed top-0 left-0 z-50 transition-colors flex flex-row justify-between items-center px-7 ${
        scrolled ? "bg-white text-black" : "text-white bg-transparent"
      }`}
    >
      <p className="text-3xl font-semibold uppercase inline-block ">Képkocka</p>
      <div className="flex flex-row items-center just">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm uppercase mx-3 my-5 inline-block align-middle hover:underline"
          >
            {item.name}
          </a>
        ))}
        <img
          src={scrolled ? "/img/logo-black.png" : "/img/logo.png"}
          alt="logo"
          className="w-9 h-9 contain-content ml-12"
        />
      </div>
    </div>
  );
}
const menuItems: MenuItem[] = [
  {
    name: "Megbízás",
    href: "#kontakt-holder",
  },
  {
    name: "Projektek",
    href: "#nyito-holder",
  },
  {
    name: "Rólunk",
    href: "#bemutatkozas-holder",
  },
  {
    name: "Fotók",
    href: "#fotok-holder",
  },
  {
    name: "Videók",
    href: "#videok-holder",
  },
  {
    name: "Kontakt",
    href: "#kontakt-holder",
  },
];
type MenuItem = {
  name: string;
  href: string;
};
