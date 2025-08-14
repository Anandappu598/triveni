import React, { useState } from 'react';
import PatientForm from '../components/PatientForm';
import QueueOverview from '../components/QueueOverview';
import Footer from '../components/Footer';
import '../styles/ReceptionPage.css';

const ReceptionPage = () => {
  const [patients, setPatients] = useState([
    { name: 'Madhu', bill: '1088' },
    { name: 'Priya', bill: '1048' },
    { name: 'Jeshy', bill: '1028' },
  ]);
  const [success, setSuccess] = useState(false);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="reception-container">
      <div className="cards">
        <PatientForm onAdd={addPatient} success={success} />
        <QueueOverview patients={patients} />
      </div>
      <Footer />
    </div>
  );
};

export default ReceptionPage;
