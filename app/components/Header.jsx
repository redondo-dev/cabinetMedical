
"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useTheme } from '../providers/ThemeProvider';


const NavigationLink = ({
  href,
  className,
  children,
  onClick,
  isMobile,
  isSubmenu,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <Link
      href={href}
      className={`${
        isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'
      } transition-colors duration-200 relative group ${className || ""}`}
      onClick={onClick}
    >
      {children}
      {!isMobile && !isSubmenu && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  );
};

const NestedSubmenu = ({ items }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
      {items.map((item, index) => (
        <div key={index} className="relative group/nested">
          <Link
            href={item.link}
            className={`block px-4 py-2 text-sm ${
              isDarkMode
                ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            } ${item.submenu ? 'flex justify-between items-center' : ''}`}
          >
            {item.title}
            {item.submenu && (
              <span className="ml-2">›</span>
            )}
          </Link>
          
          {item.submenu && (
            <div className="absolute left-full top-0 w-48 invisible group-hover/nested:visible opacity-0 group-hover/nested:opacity-100 transition-all duration-200">
              <div className="rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.link}
                    className={`block px-4 py-2 text-sm ${
                      isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const MobileSubmenu = ({ items, level = 0 }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <ul className={`space-y-2 ${level > 0 ? 'ml-4 mt-2' : ''}`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            className={`block ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {item.title}
          </Link>
          {item.submenu && (
            <MobileSubmenu items={item.submenu} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};
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
)

export default function Header({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "unset";
      return !prev;
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            {/* <Logo /> */}
          </div>

          <button
            onClick={toggleDarkMode}
            className="text-lg p-2 mr-4 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Mode jour/nuit"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

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
                    <div className="absolute left-0 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <NestedSubmenu items={item.submenu} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu mobile avec glassmorphism */}
          {isOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden"
                onClick={toggleMenu}
                aria-hidden="true"
              />
              <div
                className="fixed inset-y-0 right-0 w-full transform transition-transform duration-300 ease-in-out md:hidden overflow-hidden"
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
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
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}


