import React from 'react';

const CurrentPatientCard = ({ patient, onMarkCompleted, onReAdd }) => {
  return (
    <div className="card current-patient-card">
      <h2>🩺 Current Patient</h2>
      <div className="highlight-card">
        <p className="label">Bill Number</p>
        <h2 className="bill">{patient.bill}</h2>
        <p className="name">{patient.name}</p>
        <p className="added-time">Added: {patient.time}</p>
      </div>

      {patient.completed && (
        <div className="status-completed">
          ✅ User Completed <span className="close">x</span>
        </div>
      )}

      <button className="btn green" onClick={onMarkCompleted}>
        ✅ Mark as Completed
      </button>
      <button className="btn blue" onClick={onReAdd}>
        📝 Add to Queue Again
      </button>
    </div>
  );
};

export default CurrentPatientCard;
