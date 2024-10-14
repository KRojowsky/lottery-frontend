import React from 'react';
import './Prizes.scss';
import prize1 from '../../assets/prize1.png';
import prize2 from '../../assets/prize2.png';
import prize3 from '../../assets/prize3.png';

const prizes = [
  { img: prize1, name: 'Xiaomi Electric Scooter 4 Pro 2nd Gen', count: '10x' },
  { img: prize2, name: 'Tablet Xiaomi Pad 6 8+256GB Gravity Gray', count: '10x' },
  { img: prize3, name: 'Air Fryer Frytownica Beztłuszczowa Xiaomi Mi Smart 6.5L', count: '10x' },
];

const Prizes = () => {
  return (
    <section className="price-section">
      <div className="container">
        <h2 className="title">Wygraj nagrody</h2>
        <div className="prizes-column">
          {prizes.map((prize, index) => (
            <div key={index} className="prize-item">
              <span className="prize-count">{prize.count}</span>
              <img className="prize-img" src={prize.img} alt={prize.name} />
              <h3 className="prize-name">{prize.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
