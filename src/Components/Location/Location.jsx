import React from 'react';
import './Location.scss';
import shop_img_1 from "../../assets/salon_krk_1.png";
import shop_img_2 from "../../assets/salon_wro_2.png";
import shop_img_3 from "../../assets/salon_poz_3.png";
import shop_img_4 from "../../assets/salon_kato_4.png";
import shop_img_5 from "../../assets/salon_gda_5.png";
import shop_img_6 from "../../assets/salon_gdy_6.png";
import shop_img_7 from "../../assets/salon_krk_7.png";
import shop_img_8 from "../../assets/salon_war_8.png";
import shop_img_9 from "../../assets/salon_lub_9.png";
import shop_img_10 from "../../assets/salon_rzesz_10.png";
import shop_img_11 from "../../assets/salon_czes_11.png";
import shop_img_12 from "../../assets/salon_poz_12.png";
import shop_img_13 from "../../assets/salon_czel_13.png";
import shop_img_14 from "../../assets/salon_lod_14.png";

const salons = [
  {
    img: shop_img_1,
    name: "Autoryzowany Salon Xiaomi Store w Krakowie",
    address1: "Centrum Handlowe Serenada al. Generała Bora Komorowskiego 41 31-876 Kraków",
    level: "Poziom +2",
    number: "575 228 668",
    email: "krakow@mi-store.pl"
  },
  {
    img: shop_img_2,
    name: "Autoryzowany Salon Xiaomi Store we Wrocławiu",
    address1: "Pasaż Grunwaldzki Plac Grunwaldzki 22 50-363 Wrocław",
    level: "Poziom 0",
    number: "575 228 660",
    email: "wroclaw@mi-store.pl"
  },
  {
    img: shop_img_3,
    name: "Autoryzowany Salon Xiaomi Store w Poznaniu",
    address1: "Centrum Posnania ul. Pleszewska 1 61-136 Poznań",
    level: "Poziom 0",
    number: "575 228 665",
    email: "poznan@mi-store.pl"
  },
  {
    img: shop_img_4,
    name: "Autoryzowany Salon Xiaomi Store w Katowicach",
    address1: "Autoryzowany Salon Xiaomi Store w Katowicach",
    level: "Poziom 0",
    number: "575 228 655",
    email: "katowice@mi-store.pl"
  },
  {
    img: shop_img_5,
    name: "Autoryzowany Sklep Xiaomi Store w Gdańsku",
    address1: "Galeria Bałtycka Aleja Grunwaldzka 141 80-264 Gdańsk",
    level: "Poziom 0",
    number: "575 228 626",
    email: "gdansk@mi-store.pl"
  },
  {
    img: shop_img_6,
    name: "Autoryzowany Salon Xiaomi Store w Gdyni",
    address1: "Centrum Riviera ul. Kazimierza Górskiego 2 81-304 Gdynia",
    level: "Poziom 1",
    number: "575 228 667",
    email: "gdynia@mi-store.pl"
  },
  {
    img: shop_img_7,
    name: "Autoryzowany Salon Xiaomi Store w Krakowie",
    address1: "Galeria Krakowska ul. Pawia 5 31-154 Kraków",
    level: "Poziom -1",
    number: "575 228 669",
    email: "krakow2@mi-store.pl"
  },
  {
    img: shop_img_8,
    name: "Autoryzowany Salon Xiaomi Store w Warszawie",
    address1: "Galeria Młociny ul. Zgrupowania AK Kampinos 15 01-943 Warszawa",
    level: "Poziom 0",
    number: "575 228 661",
    email: "warszawa@mi-store.pl"
  },
  {
    img: shop_img_9,
    name: "Autoryzowany Salon Xiaomi Store w Lublinie",
    address1: "Centrum Handlowo-Rozrywkowe Lublin Plaza ul.Lipowa 13 20-020 Lublin",
    level: "Poziom 0",
    number: "575 228 662",
    email: "lublin@mi-store.pl"
  },
  {
    img: shop_img_10,
    name: "Autoryzowany Salon Xiaomi Store w Rzeszowie",
    address1: "Galeria Rzeszów Al. Piłsudskiego 44 35-001 Rzeszów",
    level: "Poziom -1",
    number: "575 228 663",
    email: "rzeszow@mi-store.pl"
  },
  {
    img: shop_img_11,
    name: "Autoryzowany Salon Xiaomi Store w Częstochowie",
    address1: "Galeria Jurajska Aleja Wojska Polskiego 207 42-200 Częstochowa",
    level: "Poziom 1",
    number: "575 228 640",
    email: "czestochowa@mi-store.pl"
  },
  {
    img: shop_img_12,
    name: "Autoryzowany Salon Xiaomi Store w Poznaniu",
    address1: "Centrum Avenida ul. Matyi 2 61-586 Poznań",
    level: "Poziom 1",
    number: "575 228 644",
    email: "poznan2@mi-store.pl"
  },
  {
    img: shop_img_13,
    name: "Autoryzowany Salon Xiaomi Store w Czeladzi",
    address1: "Centrum Handlowe Manufaktura Drewnowska 58 91-002 Łódź",
    level: "Poziom 0",
    number: "575 228 646",
    email: "czeladz@mi-store.pl"
  },
  {
    img: shop_img_14,
    name: "Autoryzowany Salon Xiaomi Store w Łodzi",
    address1: "Centrum Handlowe Manufaktura Drewnowska 58 91-002 Łódź",
    level: "Poziom 1",
    number: "575 228 670",
    email: "lodz@mi-store.pl"
  },
];

const Location = () => {
  return (
    <section className="section location">
      <div className="container">
        <h2 className="title">Salony Xiaomi Store</h2>
        <div className="salon-list">
          {salons.map((salon, index) => (
            <div key={index} className="location-details">
              <div className="image-wrapper">
                <img src={salon.img} alt={`Xiaomi Store ${index + 1}`} className="store-image" />
              </div>
              <div className="address-details">
                <h3 className="center-name">{salon.name}</h3>
                <p className="data-line">{salon.address1}</p>
                <p className="data-line">{salon.level}</p>
                <p className="data-line">Numer: {salon.number}</p>
                <p className="data-line">Email: {salon.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
