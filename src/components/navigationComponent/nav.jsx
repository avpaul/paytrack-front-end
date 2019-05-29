import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const nav = () => (
  <nav className="nav">
    <Link to="/" className="nav-logo">
      PayTrack
    </Link>

    <div className="nav-spacer" />
    <div className="nav-menu">
      <Link to="/" className="menu-item">paid</Link>
      <Link to="/" className="menu-item">consider</Link>
      <Link to="/" className="menu-item">settings</Link>
      <Link to="/" className="menu-item">profile</Link>
    </div>
  </nav>
);

export default nav;
