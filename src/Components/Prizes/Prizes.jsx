import React from 'react';
import './Prizes.scss';
import prize1 from '../../assets/prize1.png';
import prize2 from '../../assets/prize2.png';
import prize3 from '../../assets/prize3.png';

const prizes = [
  { img: prize1, name: 'Xiaomi Electric Scooter 4', description: 'Bardzo funkcjonalna, genialnie zaprojektowana i prosta w obsłudze hulajnoga elektryczna wpisująca się w klimat wielkomiejskiego życia.' },
  { img: prize2, name: 'Tablet Redmi Pad SE 4+128GB', description: '11 cali, ekran 90Hz, świetna wydajność z baterią 8000mAh, procesor Snapdragon 680. Styl i solidność w najlepszym wydaniu.' },
  { img: prize3, name: 'Xiaomi Smart Air Fryer 6.5L', description: 'Beztłuszczowa frytownica, która umożliwia zdrowsze gotowanie, smażenie i pieczenie z minimalnym użyciem oleju.' },
];

const Prizes = () => {
  return (
    <section className="price-section">
      <div className="container">
        <h2 className="title">Wygraj nagrody</h2>
        <div className="prizes-column">
          {prizes.map((prize, index) => (
            <div key={index} className="prize-item">
              <img className="prize-img" src={prize.img} alt={prize.name} />
              <h3 className="prize-name">{prize.name}</h3>
              <div className="prize-description">{prize.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
