import React, { useState } from 'react';
import CurrentPatientCard from '../components/CurrentPatientCard';
import QueueOverview from '../components/QueueOverview';
import Footer from '../components/Footer';
import '../styles/ScanRoomPage.css';

const ScanRoomPage = () => {
  const [currentPatient, setCurrentPatient] = useState({
    name: 'Madhu',
    bill: '1008',
    time: '10:30 am',
    completed: false,
  });

  const [patients, setPatients] = useState([
    { name: 'Madhu', bill: '1088' },
    { name: 'Priya', bill: '1048' },
    { name: 'Jeshy', bill: '1028' },
  ]);

  const markCompleted = () => {
    setCurrentPatient((prev) => ({ ...prev, completed: true }));
  };

  const addToQueueAgain = () => {
    setPatients([...patients, currentPatient]);
  };

  return (
    <div className="scanroom-container">
      <div className="scanroom-cards">
        <CurrentPatientCard
          patient={currentPatient}
          onMarkCompleted={markCompleted}
          onReAdd={addToQueueAgain}
        />
        <QueueOverview patients={patients} />
      </div>
      <Footer />
    </div>
  );
};

export default ScanRoomPage;
