import React from 'react';

import '../styles/Physicians.css';

const Physicians = ({ getInfo, physiciansList, currentPhysician }) => (
  <div className="left side-bar">
    <div className="title-header">PHYSICIANS</div>
    <div className="physicians-list">
      {physiciansList.map((physician, i) => {
        let curPhysician = false;
        let lastName = physician.split(',')[0];
        if (currentPhysician === lastName) {
          curPhysician = true;
        }
        return (
          <div
            className={`list-item physician-list-item-${i} ${curPhysician ? 'curPhysician' : ''}`}
            key={physician}
            onClick={() => {getInfo(lastName);}}
            role="button"
          >
            {physician}
          </div>
        );
      })}
    </div>
  </div>
);

export default Physicians;
