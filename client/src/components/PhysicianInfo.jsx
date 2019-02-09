import React from 'react';

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
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
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
