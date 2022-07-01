import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Header = () => (
  <header>
    <nav className="navbar">
      <i><MdOutlineArrowBackIosNew /></i>
      <h2>Kick Drip</h2>
      <div>
        <i><FaMicrophone /></i>
        <i><AiOutlineSetting /></i>
      </div>
    </nav>
  </header>
);

export default Header;
