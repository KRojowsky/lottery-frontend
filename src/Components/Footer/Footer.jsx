import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span>Copyright &copy; Mi-store 2024</span>
          </div>
          <div className="footer-right">
            <a href="https://mi-store.pl/" target='_blank' aria-label="Shop">
                <FaShoppingCart size={24} />
            </a>
            <a href="https://www.instagram.com/mistorepl/" target='_blank' aria-label="Instagram">
                <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/mistorepolska/" target='_blank' aria-label="Facebook">
                <FaFacebook size={24} />
            </a>
            <a href="https://www.tiktok.com/@mistorepl" target='_blank' aria-label="Tik Tok">
                <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
