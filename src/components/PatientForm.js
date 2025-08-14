import React, { useState } from 'react';

const PatientForm = ({ onAdd, success }) => {
  const [bill, setBill] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !name) return;
    onAdd({ bill, name });
    setBill('');
    setName('');
  };

  return (
    <div className="card form-card">
      <h2>➕ Add Patient to Queue</h2>
      <form onSubmit={handleSubmit}>
        <label>Bill Number</label>
        <input
          type="text"
          placeholder="Enter bill number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
        <label>Patient Name</label>
        <input
          type="text"
          placeholder="Enter patient name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {success && (
          <div className="success-message">
            ✅ User Added Successfully <span className="close">✖</span>
          </div>
        )}

        <button type="submit">Add to Queue</button>
      </form>
    </div>
  );
};

export default PatientForm;
