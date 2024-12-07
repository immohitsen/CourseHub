import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container text-center px-4">
        <p className="mb-4">© 2024 Course Hub. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4">
          <li className="nav-item">
            <a className="nav-link text-white hover:text-gray-300" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white hover:text-gray-300" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white hover:text-gray-300" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
