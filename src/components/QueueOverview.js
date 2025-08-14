import React from 'react';

const QueueOverview = ({ patients }) => {
  return (
    <div className="card queue-card">
      <h2>👤 Queue Overview</h2>
      <div className="stats">
        <div className="total">Total Patients<br /><strong>{patients.length}</strong></div>
        <div className="waiting">Waiting<br /><strong>{patients.length}</strong></div>
      </div>
      <h4>Upcoming Patients</h4>
      {patients.map((p, index) => (
        <div className="patient-item" key={index}>
          <div>
            <strong>{p.name}</strong>
            <div className="bill">Bill : {p.bill}</div>
          </div>
          <span className="queue-number">#{index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default QueueOverview;
