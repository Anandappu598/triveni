// src/pages/TVDisplayPage.js
import React from 'react';
import '../styles/TVDisplay.css';

const TVDisplayPage = () => {
  const upcomingPatient = { bill: '1048', name: 'Priya', time: '10:40 am' };
  const currentPatient = { bill: '1008', name: 'Madhu', time: '10:30 am' };
  const waitingList = Array.from({ length: 12 }, (_, i) => ({
    name: 'jeshy',
    bill: '1028',
    number: i + 3,
  }));

  return (
    <div className="tv-container">
      {/* Header Logo + Title */}
      <div className="tv-center-header">
        <img src="/assets/logo.png" alt="Triveni Logo" className="tv-center-logo" />
        <h1 className="tv-center-title">TRIVENI DIAGNOSTICS AND IMAGING CENTRE</h1>
      </div>

      <div className="tv-main">
        <div className="tv-cards">
          {/* Upcoming Patient */}
          <div className="tv-card yellow-card">
            <div className="card-icon">👤</div>
            <div className="card-title">Upcoming Patient</div>
            <div className="patient-info-box yellow-box">
              <div className="bill-number">{upcomingPatient.bill}</div>
              <div className="patient-name">{upcomingPatient.name}</div>
            </div>
            <div className="added-time">Added: {upcomingPatient.time}</div>
          </div>

          {/* Current Patient */}
          <div className="tv-card green-card">
            <div className="card-icon">🧍‍♂️</div>
            <div className="card-title">Currently Attending</div>
            <div className="patient-info-box green-box">
              <div className="bill-number">{currentPatient.bill}</div>
              <div className="patient-name">{currentPatient.name}</div>
            </div>
            <div className="added-time">Added at: {currentPatient.time}</div>
          </div>
        </div>

        {/* Waiting List */}
        <div className="waiting-section">
          <h3>Waiting</h3>
          <div className="tv-waiting-grid">
            {waitingList.map((item, index) => (
              <div className="tv-waiting-card" key={index}>
                <div className="name">{item.name}</div>
                <div className="bill">Bill : {item.bill}</div>
                <div className="number">#{item.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="tv-footer">
        <div className="developed">© Developed by Jeshwanth</div>
        <div className="tv-qr">
          <img src="/assets/qrcode.png" alt="QR Code" />
          <div className="qr-text">
            <small>Going outside?</small>
            <small>not at all a problem</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVDisplayPage;
