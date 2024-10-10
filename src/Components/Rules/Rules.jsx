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
              W terminie od 15.11.2024 do 31.12.2024 kup dowolny produkt z oferty w Salonach Xiaomi Store lub na{' '}
              <a href="https://mi-store.pl" target="_blank" rel="noopener noreferrer">
                mi-store.pl
              </a>
            </p>
          </div>
          <div className="rule-card" data-number="2">
            <span className="rule-step">Zarejestruj</span>
            <p>Graj o nagrody! Zarejestruj się do loterii w okresie od 15.11.2024 do 07.01.2025</p>
          </div>
          <div className="rule-card" data-number="3">
            <span className="rule-step">Wygraj</span>
            <p>Sprawdź wyniki losowania, które odbędzie się 22.01.2025. Powodzenia!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
