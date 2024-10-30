"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    setActiveNestedSubmenu(null);
  };

  const toggleNestedSubmenu = (e, submenu) => {
    e.stopPropagation();
    setActiveNestedSubmenu(activeNestedSubmenu === submenu ? null : submenu);
  };

  const menuItems = [
    {
      title: "LE CENTRE",
      link: "/centre",
      submenu: [
        { title: "Consultations Médicales", link: "/centre/consultations" },
      ],
    },
    {
      title: "ÉPILATION LASER",
      link: "/laser",
      submenu: [
        {
          title: "Hommes",
          link: "/laser/hommes",
          submenu: [
            { title: "Visage", link: "/laser/hommes/visage" },
            { title: "Torse", link: "/laser/hommes/torse" },
            { title: "Dos", link: "/laser/hommes/dos" },
            { title: "Bras", link: "/laser/hommes/bras" },
            { title: "Jambes", link: "/laser/hommes/jambes" },
            { title: "Aisselles", link: "/laser/hommes/aisselles" },
            { title: "Maillot", link: "/laser/hommes/maillot" },
          ],
        },
        {
          title: "Femmes",
          link: "/laser/femmes",
          submenu: [
            { title: "Visage", link: "/laser/femmes/visage" },
            { title: "Bras", link: "/laser/femmes/bras" },
            { title: "Aisselles", link: "/laser/femmes/aisselles" },
            { title: "Jambes", link: "/laser/femmes/jambes" },
            { title: "Maillot", link: "/laser/femmes/maillot" },
            { title: "Dos", link: "/laser/femmes/dos" },
          ],
        },
      ],
    },
    {
      title: "INJECTION",
      link: "/injection",
    },
    {
      title: "QUALITÉ DE PEAU",
      link: "/qualiteDePeau",
    },
    {
      title: "HYDRAFACIAL",
      link: "/hydrafacial",
    },
    {
      title: "TARIFS",
      link: "/tarifs",
    },
    {
      title: "CONTACT",
      link: "/contact",
    },
  ];

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <Link href="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative flex flex-col items-center justify-center w-8 h-8 space-y-1"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-transform duration-300 ${
                  isOpen ? "transform rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-500 transition-transform duration-300 ${
                  isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop Navigation Links with improved hover behavior */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.link}
                      className="text-gray-500 hover:text-gray-500/75"
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="absolute left-0 w-full">
                        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                          <ul className="absolute left-0 mt-2 bg-slate-300 border rounded-md shadow-lg min-w-[200px] z-50">
                            {item.submenu.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="relative group/submenu"
                              >
                                <Link
                                  href={subItem.link}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.title}
                                </Link>
                                {subItem.submenu && (
                                  <div className="absolute left-full top-0 w-full">
                                    <div className="invisible group-hover/submenu:visible opacity-0 group-hover/submenu:opacity-100 transition-all duration-300 delay-150">
                                      <ul className="absolute left-0 mt-0 bg-slate-300 border rounded-md shadow-lg min-w-[200px]">
                                        {subItem.submenu.map(
                                          (nestedItem, nestedIndex) => (
                                            <li key={nestedIndex}>
                                              <Link
                                                href={nestedItem.link}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                                              >
                                                {nestedItem.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden">
    <nav aria-label="Global">
      <ul className="bg-glass flex flex-col items-center gap-4 p-4">
        {menuItems.map((item, index) => (
          <li key={index} className="w-full">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-full">
                <Link
                  href={item.link}
                  className="text-gray-500 hover:text-gray-500/75 px-4 py-2"
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="ml-2 text-gray-500 hover:text-gray-500/75 p-2"
                  >
                    {activeSubmenu === index ? '▼' : '▶'}
                  </button>
                )}
              </div>
              {item.submenu && activeSubmenu === index && (
                <ul className="bg-class mt-2 space-y-2 w-full">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="w-full">
                      <div className=" flex flex-col items-center">
                        <div className="flex items-center justify-center w-full">
                          <Link
                            href={subItem.link}
                            className="text-gray-700 hover:text-gray-500 px-4 py-2"
                          >
                            {subItem.title}
                          </Link>
                          {subItem.submenu && (
                            <button
                              onClick={(e) => toggleNestedSubmenu(e, `${index}-${subIndex}`)}
                              className="ml-2 text-gray-700 hover:text-gray-500 p-2"
                            >
                              {activeNestedSubmenu === `${index}-${subIndex}` ? '▼' : '▶'}
                            </button>
                          )}
                        </div>
                        {subItem.submenu && activeNestedSubmenu === `${index}-${subIndex}` && (
                          <ul className="mt-2 space-y-2 w-full bg-blue-100 rounded-lg p-2">
                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                              <li key={nestedIndex} className="w-full">
                                <Link
                                  href={nestedItem.link}
                                  className="block text-gray-600 hover:text-gray-400 text-center px-4 py-2"
                                >
                                  {nestedItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
)}

        {/* Mobile Menu
        {isOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center bg-blue-200 rounded-[30px] gap-4 p-4">
                {menuItems.map((item, index) => (
                  <li key={index} className="w-full">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-full">
                        <Link
                          href={item.link}
                          className="text-gray-500 hover:text-gray-500/75 px-4 py-2"
                        >
                          {item.title}
                        </Link>
                        {item.submenu && (
                          <button
                            onClick={() => toggleSubmenu(index)}
                            className="ml-2 text-gray-500 hover:text-gray-500/75 p-2"
                          >
                            {activeSubmenu === index ? "▼" : "▶"}
                          </button>
                        )}
                      </div>
                      {item.submenu && activeSubmenu === index && (
                        <ul className="mt-2 space-y-2 w-full">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="w-full">
                              <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-full">
                                  <Link
                                    href={subItem.link}
                                    className="text-gray-700 hover:text-gray-500 px-4 py-2"
                                  >
                                    {subItem.title}
                                  </Link>
                                  {subItem.submenu && (
                                    <button
                                      onClick={(e) =>
                                        toggleNestedSubmenu(
                                          e,
                                          `${index}-${subIndex}`
                                        )
                                      }
                                      className="ml-2 text-gray-700 hover:text-gray-500 p-2"
                                    >
                                      {activeNestedSubmenu ===
                                      `${index}-${subIndex}`
                                        ? "▼"
                                        : "▶"}
                                    </button>
                                  )}
                                </div>
                                {subItem.submenu &&
                                  activeNestedSubmenu ===
                                    `${index}-${subIndex}` && (
                                    <ul className="mt-2 space-y-2 w-full bg-blue-100 rounded-lg p-2">
                                      {subItem.submenu.map(
                                        (nestedItem, nestedIndex) => (
                                          <li
                                            key={nestedIndex}
                                            className="w-full"
                                          >
                                            <Link
                                              href={nestedItem.link}
                                              className="block text-gray-600 hover:text-gray-400 text-center px-4 py-2"
                                            >
                                              {nestedItem.title}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </div>
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
        )} */}
      </div>
    </header>
  );
}

export default Header;
