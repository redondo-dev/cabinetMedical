"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    setSubMenuOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setSubMenuOpen((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78..."
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          {/* Menu Burger Button on Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative flex flex-col items-center justify-center w-8 h-8 space-y-1"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-transform duration-300 ${isOpen ? "transform rotate-45 translate-y-1.5" : ""
                  }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-transform duration-300 ${isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {["laser", "injection", "qualiteDePeau", "centre", "autres"].map((item) => (
                  <li
                    key={item}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave(item)}
                  >
                    <Link href={`/${item}`} className="text-gray-500 hover:text-gray-500/75">
                      {item.toUpperCase().replace(/([A-Z])/g, " $1").trim()}
                    </Link>
                    {subMenuOpen[item] && (
                      <ul className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg">
                        {/* Remplace par les liens réels correspondants à chaque item */}
                        <li>
                          <Link href={`/${item}/dashboard`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {item.toUpperCase()} Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link href={`/${item}/settings`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {item.toUpperCase()} Settings
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link href="/tarifs" className="text-gray-500 hover:text-gray-500/75">
                    TARIFS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-gray-500/75">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center bg-blue-200 rounded-[30px] gap-4 p-4">
                <li>
                  <Link href="/laser" className="text-gray-500 hover:text-gray-500/75">
                    EPILATION LASER
                  </Link>
                </li>
                <li>
                  <Link href="/injection" className="text-gray-500 hover:text-gray-500/75">
                    INJECTION
                  </Link>
                </li>
                <li>
                  <Link href="/qualiteDePeau" className="text-gray-500 hover:text-gray-500/75">
                    QUALITE DE PEAU
                  </Link>
                </li>
                <li>
                  <Link href="/centre" className="text-gray-500 hover:text-gray-500/75">
                    LE CENTRE
                  </Link>
                </li>
                <li>
                  <Link href="/autres" className="text-gray-500 hover:text-gray-500/75">
                    AUTRES
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" className="text-gray-500 hover:text-gray-500/75">
                    TARIFS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-gray-500/75">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
