import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">
          Study Episode Generator
        </h1>
        <p className="text-sm text-gray-500">
          Transform your study materials into engaging animated story episodes
        </p>
      </div>
    </header>
  );
};

export default Header;
