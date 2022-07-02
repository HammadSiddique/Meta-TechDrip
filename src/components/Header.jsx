import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar">
      <Link to="/"><i className="back-btn"><MdOutlineArrowBackIosNew /></i></Link>
      <h2 className="shop-name">Meta TechDrip</h2>
      <div>
        <i><FaMicrophone /></i>
        <i><AiOutlineSetting /></i>
      </div>
    </nav>
  </header>
);
export default Header;
