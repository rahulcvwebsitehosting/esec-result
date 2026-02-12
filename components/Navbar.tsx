import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '#', active: false },
    { label: 'About', href: '#', active: false },
    { label: 'Results', href: '#', active: true },
    { label: 'Regulations', href: '#', active: false },
    { label: 'Contact', href: '#', active: false },
    { label: 'Login', href: '#', active: false },
  ];

  return (
    <nav 
      className={`bg-gradient-primary shadow-md sticky z-[999] transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ top: '0px' }} // Adjusted for sticky behavior below header handled by main layout flow or just sticky naturally
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-center relative min-h-[60px]">
        {/* Mobile Toggle */}
        <button 
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="w-[25px] h-[20px] relative flex flex-col justify-between">
            <span className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`}></span>
            <span className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-full h-[3px] bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className={`
          flex flex-col md:flex-row m-0 p-0 list-none
          absolute md:relative top-full left-0 right-0 md:top-auto
          bg-navy md:bg-transparent
          overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[400px] shadow-xl' : 'max-h-0 md:max-h-full'}
        `}>
          {navItems.map((item) => (
            <li key={item.label} className="relative group w-full md:w-auto border-b border-white/10 md:border-none">
              <a 
                href={item.href}
                className={`
                  block text-white font-heading font-medium text-[0.95rem] uppercase tracking-[0.5px]
                  py-5 px-6 transition-all duration-300
                  hover:bg-white/10 hover:text-gold
                  ${item.active ? 'bg-white/15 text-gold' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {/* Underline Animation */}
                <span className={`
                  hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gold transition-all duration-300
                  ${item.active ? 'w-[70%]' : 'w-0 group-hover:w-[70%]'}
                `}></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;