import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './nav.scss';

export default class Nav extends Component {
  constructor(params) {
    super(params);
    this.state = {
      title: 'paytrack',
    };
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/">PayTrack</Link>
          <div className="nav-spacer" />
          <div className="menu">
            <Link to="/">paid</Link>
            <Link to="/">consider</Link>
            <Link to="/">settings</Link>
            <Link to="/">profile</Link>
          </div>
          <img src="" alt="" srcset="hello"/>
        </nav>
      </Router>
    );
  }
}
