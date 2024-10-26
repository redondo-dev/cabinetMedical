import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="#" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="..." // Les autres attributs restent inchangés
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/lazer"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    EPILATION LAZER
                  </Link>
                </li>
                <li>
                  <Link
                    href="/injection"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    INJECTION
                  </Link>
                </li>
                <li>
                  <Link
                    href="/qualiteDePeau"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    {" "}
                    QUALITE DE PEAU
                  </Link>
                </li>
                <li>
                  <Link
                    href="/centre"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    LE CENTRE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/autres"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    AUTRES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tarifs"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    TARIFS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
