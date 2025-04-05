import React from 'react';
import logo from '../assets/images/logo.svg'; 

const Header = () => {
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
          <a href="/" className='-mt-7'>
            <img src={logo} alt="Logo" width={200} height={63} />
          </a>
          <nav className="flex items-center gap-12 max-w-[calc(100%-300px)] w-full">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-xl font-semibold text-customGray">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href='#' className='btn'>
              ZÍSKAJTE UKÁŽKU
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
