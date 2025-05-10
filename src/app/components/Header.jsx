'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "DOMOV", link: "/" },
    { name: "VLASTNOSTI", link: "/features" },
    { name: "CENA", link: "/pricing" },
    { name: "AKO TO FUNGUJE?", link: "/how-it-works" },
    { name: "KONTAKTOVAŤ", link: "/contact" },
    { name: "ZAREGISTRUJTE SA", link: "/register" },
  ];

  return (
    <header className='py-10 fixed top-0 left-0 w-full bg-white shadow-custom-blue z-50'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <Link href="/" className='-mt-5 md:-mt-7 w-[160px] md:w-[200px]'>
            <Image src={logo} alt="Logo" width={'100%'} height={63} priority />
          </Link>

          {/* Hamburger Icon (mobile only) */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between w-8 h-6 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[0.7rem]' : ''}`}
              />
              <span
                className={`h-1 w-full bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-end gap-5 2xl:gap-12 max-w-[calc(100%-300px)] w-full">
            <ul className="flex items-center gap-5 2xl:gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="text-base lg:text-xs xl:text-xm 2xl:text-base font-semibold text-customGray hover:text-[#de4278] transition-all  duration-300 ease-in-out">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="#" className='btn lg:text-xs lg:text-xm 2xl:text-xl '>
              ZÍSKAJTE UKÁŽKU
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <ul className="flex flex-col items-start gap-6 px-6 py-8">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <Link
                  href={item.link}
                  className="text-lg font-medium text-customGray block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <a href="#" className="btn">
                ZÍSKAJTE UKÁŽKU
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
