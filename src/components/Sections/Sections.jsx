import React from 'react';
import './Sections.module.css';

const Sections = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Sections;

