import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./Hero.scss";
import logo from "../../assets/landing-logo.png";
import prizes from "../../assets/prizes.png";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    const launchConfetti = () => {
      const end = Date.now() + 2000;
      const colors = ['#ff6900', '#f0f', '#0ff', '#00f', '#0f0'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: Math.random() * 360,
          spread: 70,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };

    launchConfetti();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-up">
          <img src={logo} alt="Logo firmy" />
          <div className="hero-title">
            <span>KUPUJ</span> i <span>WYGRYWAJ</span>
          </div>
        </div>
        <div className="hero-middle">
          <img className="prizes" src={prizes} alt="Nagrody w Loterii" />
        </div>
        <div className="hero-down">
      <Link to="member" smooth={true} offset={-100} duration={100} className="scroll-link" >
        Weź udział &#10140;
      </Link>
    </div>
      </div>
    </section>
  );
};

export default Hero;
