"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";

const NavigationLink = ({
  href,
  className,
  children,
  onClick,
  isMobile,
  isSubmenu,
}) => (
  <Link
    href={href}
    className={`text-gray-500 hover:text-gray-500/75 transition-colors duration-200 relative group ${
      className || ""
    }`}
    onClick={onClick}
  >
    {children}
    {!isMobile && !isSubmenu && (
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
    )}
  </Link>
);

const Logo = () => (
  <Link href="/" className="block text-teal-600">
    <span className="sr-only">Home</span>
    <svg
      className="h-8"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* SVG Path */}
      <path
        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
        fill="currentColor"
      />
    </svg>
  </Link>
);

// const MobileMenuButton = ({ isOpen, onClick }) => (
//   <button
//     onClick={onClick}
//     className="relative z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
//     aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
//   >
//     {[1, 2, 3].map((i) => (
//       <span
//         key={i}
//         className={`block w-6 h-0.5 transform transition-all duration-300 ease-in-out ${
//           isOpen && i === 1
//             ? "rotate-45 translate-y-2"
//             : isOpen && i === 2
//             ? "opacity-0"
//             : isOpen && i === 3
//             ? "-rotate-45 -translate-y-2"
//             : ""
//         } ${
//           i === 1 || i === 3 || i === 2
//             ? isOpen
//               ? "bg-white"
//               : "bg-gray-800"
//             : "bg-gray-800"
//         }`}
//       />
//     ))}
//   </button>
// );
const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={`relative z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5 transition-transform duration-300 ease-in-out ${
      isOpen ? "rotate-[360deg]" : "rotate-0"
    }`}
    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
  >
    {[1, 2, 3].map((i) => (
      <span
        key={i}
        className={`block w-6 h-0.5 transform transition-transform duration-300 ease-in-out ${
          isOpen && i === 1
            ? "rotate-45 translate-y-2"
            : isOpen && i === 2
            ? "opacity-0"
            : isOpen && i === 3
            ? "-rotate-45 -translate-y-2"
            : ""
        } ${
          i === 1 || i === 3 || i === 2
            ? isOpen
              ? "bg-white"
              : "bg-gray-800"
            : "bg-gray-800"
        }`}
      />
    ))}
  </button>
);

function Header({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "unset";
      return !prev;
    });
  }, []);

  const toggleSubmenu = useCallback((submenu) => {
    setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
  }, []);

  const toggleSubSubmenu = useCallback((subSubmenu) => {
    setActiveSubSubmenu((prev) => (prev === subSubmenu ? null : subSubmenu));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderSubmenuItems = (items, parentIndex) => (
    <ul className="absolute left-0 mt-2 min-w-[200px] bg-gray-50 border border-gray-200 rounded-md shadow-lg z-50">
      {items.map((item, index) => (
        <li key={index} className="relative group/submenu">
          <NavigationLink
            href={item.link}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
            isSubmenu={true}
            onClick={(e) => {
              if (item.submenu) e.preventDefault();
              toggleSubSubmenu(index);
            }}
          >
            {item.title}
          </NavigationLink>
          {item.submenu && activeSubSubmenu === index && (
            <ul className="absolute left-full top-0 mt-0 min-w-[200px] bg-gray-50 border border-gray-200 rounded-md shadow-lg z-50">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="relative">
                  <NavigationLink
                    href={subItem.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                    isSubmenu={true}
                  >
                    {subItem.title}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-white relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <Logo />
          </div>

          <div className="md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <NavigationLink href={item.link} className="py-1">
                    {item.title}
                  </NavigationLink>
                  {item.submenu && (
                    <div className="absolute left-0 w-full">
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {renderSubmenuItems(item.submenu, index)}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Overlay avec effet glassmorphism */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        />

        {/* Menu mobile avec glassmorphism - Maintenant en pleine largeur */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        />

        <div
          className={`fixed inset-y-0 right-0 w-full transform transition-transform duration-300 ease-in-out md:hidden overflow-hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-40`}
        >
          <nav className="h-full overflow-y-auto pt-24 pb-6 px-6 bg-black bg-opacity-50 backdrop-blur-md">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-red-400 pb-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <NavigationLink
                        href={item.link}
                        className="text-lg font-medium text-white hover:text-gray-600"
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </NavigationLink>
                      {item.submenu && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="p-2 text-red-500 hover:text-gray-700 transition-colors"
                          aria-expanded={activeSubmenu === index}
                        >
                          <span
                            className={`transform transition-transform duration-200 inline-block ${
                              activeSubmenu === index ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                      )}
                    </div>
                    {item.submenu && activeSubmenu === index && (
                      <ul className="mt-4 ml-4 space-y-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavigationLink
                              href={subItem.link}
                              className="text-white hover:text-gray-900"
                              onClick={toggleMenu}
                            >
                              {subItem.title}
                            </NavigationLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
