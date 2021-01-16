import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Housing and Crime
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">

            </li>
            <li className="nav-item">

            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
