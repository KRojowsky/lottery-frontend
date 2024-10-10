import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Member.scss';
import receiptImage from '../../assets/receipt.png';
import Notification from '../Notification/Notification';
import confetti from 'canvas-confetti';

const Member = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [dataProcessingAccepted, setDataProcessingAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });
  const [showConfetti, setShowConfetti] = useState(false);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber(phone)) {
      setNotification({ type: 'error', message: 'Numer telefonu powinien się składać z dokładnie 9 cyfr.' });
      return;
    }

    if (!termsAccepted || !ageConfirmed || !dataProcessingAccepted) {
      setNotification({ type: 'error', message: 'Musisz zaakceptować wymagane zgody.' });
      return;
    }

    const data = { first_name: firstName, last_name: lastName, phone, email, receipt };

    try {
      await axios.post('https://lotteryapi.onrender.com/api/members/create/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setNotification({ type: 'success', message: 'Dołączenie do loterii zakończonie sukcesem. Powodzenia!' });
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setReceipt('');
      setTermsAccepted(false);
      setAgeConfirmed(false);
      setDataProcessingAccepted(false);
      setNewsletterAccepted(false);
      setSelectAll(false);
      setShowConfetti(true);
    } catch (error) {
      setNotification({ type: 'error', message: 'Wystąpił błąd podczas zgłaszania Twojego uczestnictwa w loterii. Spróbuj ponownie.' });
    }
  };

  const closeNotification = () => {
    setNotification({ type: '', message: '' });
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTermsAccepted(newSelectAll);
    setAgeConfirmed(newSelectAll);
    setDataProcessingAccepted(newSelectAll);
    setNewsletterAccepted(newSelectAll);
  };

  const isFormValid = termsAccepted && ageConfirmed && dataProcessingAccepted && newsletterAccepted;

  useEffect(() => {
    if (showConfetti) {
      const launchConfetti = () => {
        const end = Date.now() + 2000;
        const colors = ['#ED681D', '#FFF', '#000', '#0000FF', '#FF0000'];

        (function frame() {
          confetti({
            particleCount: 5,
            angle: Math.random() * 360,
            spread: 70,
            origin: {
              x: Math.random(),
              y: Math.random() - 0.2,
            },
            colors: colors,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
      };

      launchConfetti();
      setShowConfetti(false);
    }
  }, [showConfetti]);

  return (
    <section className="section member">
      <div className="container">
        <h2 className="title">Weź udział</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="Imię"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Nazwisko"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Numer telefonu"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="receipt"
              className="form-control"
              placeholder="Numer paragonu"
              value={receipt}
              onChange={(e) => setReceipt(e.target.value)}
              required
            />
            <button
              id="receipt-btn"
              type="button"
              className="btn btn-link"
              onClick={() => setShowPopup(true)}
            >
              Gdzie znajdę numer paragonu?
            </button>
          </div>

          {/* Zaznacz wszystkie */}
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="selectAll"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label htmlFor="selectAll">Zaznacz wszystkie</label>
          </div>

          {/* Pojedyncze zgody */}
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
            <label htmlFor="terms">
              *Potwierdzam, że przystępuję do udziału w loterii pod nazwą „Świąteczna loteria w salonach Xiaomi i na mi-store.pl" („Loteria") jako konsument i zapoznałem(am) się z Regulaminem Loterii oraz akceptuję jego postanowienia.
            </label>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="ageConfirmed"
              checked={ageConfirmed}
              onChange={() => setAgeConfirmed(!ageConfirmed)}
              required
            />
            <label htmlFor="ageConfirmed">
              *Potwierdzam, że ukończyłem(am) 18 lat oraz spełniam warunki uczestnictwa określone w Regulaminie Loterii, w tym nie należę do osób wyłączonych z udziału, zgodnie z pkt 9. Regulaminu.
            </label>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="dataProcessingAccepted"
              checked={dataProcessingAccepted}
              onChange={() => setDataProcessingAccepted(!dataProcessingAccepted)}
              required
            />
            <label htmlFor="dataProcessingAccepted">
              *Potwierdzam zapoznanie się z informacjami dotyczącymi przetwarzania moich danych osobowych przez administratora, firmę Grzegrzółka Loterie sp. z o. o. oraz z przysługującymi mi prawami.
            </label>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="newsletterAccepted"
              checked={newsletterAccepted}
              onChange={() => setNewsletterAccepted(!newsletterAccepted)}
            />
            <label htmlFor="newsletterAccepted">
              *Wyrażam zgodę na zapis do newslettera i otrzymywanie wiadomości marketingowych od MI-Store.pl.
            </label>
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >
            Wyślij
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={receiptImage} alt="Receipt Example" />
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              X
            </button>
          </div>
        </div>
      )}

      <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
    </section>
  );
};

export default Member;