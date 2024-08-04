import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Adeel Umar</p>
        <p className="mb-2">WhatsApp: 03462171012</p>
        <p>Email: <a href="mailto:adeelumarit@gmail.com" className="text-blue-400">adeelumarit@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
