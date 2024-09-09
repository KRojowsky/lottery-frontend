import React, { useState } from 'react';
import axios from 'axios';
import './Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://lotteryapi.onrender.com/api/contact_messages/', {
        name,
        email,
        message,
      });
      alert('Wiadomość została wysłana!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      alert('Wystąpił błąd przy wysyłaniu wiadomości.');
    }
  };

  return (
    <section className="section contact">
      <div className="container">
        <h2 className="title">Kontakt</h2>
        <div className="row">
          <div className="col-lg-6 contact-info">
            <p><strong>Tel:</strong> 575 228 666</p>
            <p><strong>E-mail:</strong> sklep@mi-store.pl</p>
            <p><strong>Pełna nazwa:</strong> Mi-Store.pl</p>
            <p><strong>Adres:</strong> ul. Królowej Jadwigi 98, 30-209 Kraków (POLSKA)</p>
          </div>
          <div className="col-lg-6 contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Imię</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Twoje imię"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Twój email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Twoja wiadomość"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Wyślij</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;