import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.scss';
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTiktok, FaShoppingCart, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

const Navbar = () => {
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);

  const targetDate = new Date('2025-01-07T23:59:59');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCountdown(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="member" smooth={true} offset={-100} duration={100} className="nav-link">
                Weź udział
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Regulamin Świąteczna Loteria.pdf" target="_blank" rel="noopener noreferrer">
                Regulamin
              </a>
            </li>
            <li className="nav-item">
              <Link to="rules" smooth={true} offset={-100} duration={100} className="nav-link">
                Zasady loterii
              </Link>
            </li>
            <li className="nav-item">
              <Link to="footer" smooth={true} offset={-100} duration={100} className="nav-link">
                Kontakt
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Więcej
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="https://mi-store.pl/newsletter.php" target="_blank">Zapisz się do newslettera</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="social-icons ms-auto">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź Mi-store</Tooltip>}
            >
              <a href="https://mi-store.pl/" aria-label="Shopping Cart" target='_blank'><FaShoppingCart /></a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź naszego Facebooka</Tooltip>}
            >
              <a href="https://www.facebook.com/mistorepolska/" aria-label="Facebook" target='_blank'><FaFacebookF /></a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź naszego Instagrama</Tooltip>}
            >
              <a href="https://www.instagram.com/mistorepl/" aria-label="Instagram" target='_blank'><FaInstagram /></a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź naszego Tiktoka</Tooltip>}
            >
              <a href="https://www.tiktok.com/@mistorepl" aria-label="TikTok" target='_blank'><FaTiktok /></a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź naszego LinkedIna</Tooltip>}
            >
              <a href="https://pl.linkedin.com/company/mi-store-pl" aria-label="LinkedIn" target='_blank'><FaLinkedin /></a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Odwiedź naszego YouTube'a</Tooltip>}
            >
              <a href="https://www.youtube.com/channel/UCzr1kXAZakIcS53I2frXKGA" aria-label="YouTube" target='_blank'><FaYoutube /></a>
            </OverlayTrigger>
          </div>
        </div>
        {showStatusPopup && (
          <StatusCheck show={showStatusPopup} onClose={() => setShowStatusPopup(false)} />
        )}
      </nav>

      {showCountdown && (
        <CountdownTimer targetDate={targetDate} onClose={() => setShowCountdown(false)} />
      )}
    </>
  );
};

export default Navbar;
