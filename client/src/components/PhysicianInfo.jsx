import React from 'react';

import '../styles/PhysicianInfo.css';

const PhysicianInfo = ({ physicianInfo }) => {
  const {
    firstName,
    lastName,
    email,
    appointments,
  } = physicianInfo;

  return (
    <div className="physician-info">
      <h2 className="physician-title">{`Dr. ${firstName} ${lastName}`}</h2>
      <h3 className="physician-email">{email}</h3>
      <table className="ui striped table">
        <thead>
          <tr>
            <th className="th-head header-num">#</th>
            <th className="th-head header-name">Name</th>
            <th className="th-head header-time">Time</th>
            <th className="th-head header-kind">Kind</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({ name, time, kind }, i) => (
            <tr key={name}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{time}</td>
              <td>{kind}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhysicianInfo;
