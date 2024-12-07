import React from "react";

const Header = () => {
  return (
    <header className="bg-teal-500 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Course Hub</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a className="text-white hover:text-gray-200" href="#about">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#features">Features</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#contact">Contact</a>
            </li>
            <li>
              <button type="button" className="bg-green-500 hover:bg-green-600 text-white py-1 px-6 rounded">Sign in</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
