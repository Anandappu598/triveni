// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { name: 'Reception', path: '/reception', icon: '/assets/icons/reception.png' },
  { name: 'TV Display', path: '/tvdisplay', icon: '/assets/icons/tvdisplay.png' },
  { name: 'Scan Room', path: '/scanroom', icon: '/assets/icons/scanroom.png' },
];

const Header = ({ hideable = false }) => {
  const [isVisible, setIsVisible] = useState(!hideable);

  const headerClass = `app-header ${hideable ? 'hover-hidden' : ''} ${!isVisible ? 'hide' : 'show'}`;

  // Add event listeners to show/hide the header on hover
  React.useEffect(() => {
    if (hideable) {
      const handleMouseMove = (e) => {
        // Check if the mouse is near the top of the screen (e.g., within 50px)
        if (e.clientY < 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [hideable]);

  return (
    <header className={headerClass}>
      {/* Logo + Title */}
      <div className="header-left">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <h1 className="clinic-name">Triveni Diagnostics And Imaging Centre</h1>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <img src={item.icon} alt={item.name} className="nav-icon" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;