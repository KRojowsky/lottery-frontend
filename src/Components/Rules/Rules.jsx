import React from 'react';
import './Rules.scss';

const Rules = () => {
  return (
    <section className="section rules">
      <div className="container">
        <h2 className="title">Zasady loterii</h2>
        <div className="rules-content">
          <div className="rule-card" data-number="1">
            <span className="rule-step">Kup</span>
            <p>Wybierz dowolny produkt z naszej oferty.</p>
          </div>
          <div className="rule-card" data-number="2">
            <span className="rule-step">Zarejestruj</span>
            <p>Zarejestruj swój zakup na naszej stronie.</p>
          </div>
          <div className="rule-card" data-number="3">
            <span className="rule-step">Wygraj</span>
            <p>Weź udział w loterii i walcz o nagrody!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
