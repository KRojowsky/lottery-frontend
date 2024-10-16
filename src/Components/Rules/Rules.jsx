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
            <p>
              W terminie od <b>15.11.2024</b> do <b>31.12.2024</b> kup dowolny produkt z oferty w Salonach Xiaomi Store lub na{' '}
              <a href="https://mi-store.pl" target="_blank" rel="noopener noreferrer">
                mi-store.pl
              </a>
            </p>
          </div>
          <div className="rule-card" data-number="2">
            <span className="rule-step">Zarejestruj</span>
            <p>Graj o nagrody! Zarejestruj się do loterii w okresie od <b>15.11.2024</b> do <b>07.01.2025</b></p>
          </div>
          <div className="rule-card" data-number="3">
            <span className="rule-step">Wygraj</span>
            <p>Losowanie finałowe odbędzie się <b>24.01.2025</b>. Wyniki zostaną opublikowane na stronie loterii. Powodzenia!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
