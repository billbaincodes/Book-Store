import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import logo from '../assets/logo.png'

class Navbar extends Component {


  render() {
    return (
      <nav className="header">
      <Link to='/'>
        <div className="logo-header">
          <img className="logo" src={logo} alt="gReads"></img>
          <h4 className="headerLogo">gReads</h4>
        </div>
      </Link>

        <section className="navBar">
          <Link to='/books'> Books </Link>
          <Link to='/authors'> Authors </Link>
        </section>
      </nav>
    );
  }
}

export default Navbar;