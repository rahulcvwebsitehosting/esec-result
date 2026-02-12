import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[1000]">
      <img 
        src="https://erode-sengunthar.ac.in/coe/results/nov24/collegeheader.jpg" 
        alt="Erode Sengunthar Engineering College"
        className="w-full h-auto max-h-[140px] object-contain block"
      />
    </header>
  );
};

export default Header;