// Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-200">
      <p>&copy; {currentYear} Artur Maslov</p>
      <a
        href="https://www.arturmaslov.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        My Portfolio
      </a>
    </footer>
  );
};

export default Footer;
