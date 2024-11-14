import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTiktok, FaShoppingCart, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span>Organizatorem loterii jest Grzegrzółka Loterie sp. z o.o.</span>
            <span>Biuro w Warszawie: ul. Wrzesińska 12/37, 03-713 Warszawa</span>
            <span>Kontakt: info@grzegrzolka.com, tel. 48 22 698 58 88</span>
            <span><i>Copyright &copy; GG Stores Sp. z o.o. sp.k.</i></span>
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
            <a href="https://pl.linkedin.com/company/mi-store-pl" target='_blank' aria-label="LinkedIn">
                <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UCzr1kXAZakIcS53I2frXKGA" target='_blank' aria-label="YouTube">
                <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
