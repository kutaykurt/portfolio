import React from 'react';
import { Link } from 'react-router-dom';
import './Navigations.scss';

const Navigations = () => {
  return (
    <div className="Navigations">
      <div className='link-container'>
        <Link className='link' to="/">About Me</Link>
        <Link className='link' to="/projects" >Projects</Link>
        <Link className='link' to="/pictures">Pictures</Link>
      </div>
    </div>
  );
};

export default Navigations;
