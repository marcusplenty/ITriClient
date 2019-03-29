import React, { Component } from 'react';
import {Router, Link} from 'react-router-dom';

import '../layouts/Header.css'

class Header extends Component {
  render()  {
  return (
    <header className="Header">
    <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
    <button className="logout" onClick={()=>this.props.history.push('/')}>Log Out </button>
    </header>
    )
  }
}

export default Header;
