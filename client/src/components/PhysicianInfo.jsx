import React from 'react';

import '../styles/PhysicianInfo.css';

class PhysicianInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
      newTime: '',
      newKind: '',
    };
  }

  render() {
    const { physicianInfo, removeAppointment, addAppointment } = this.props;
    const { newName, newTime, newKind } = this.state;
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
              <th className="th-head header-remove">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(({ name, time, kind }, i) => (
              <tr key={name}>
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{time}</td>
                <td>{kind}</td>
                <td>
                  <button
                    className="mini negative ui button"
                    onClick={() => removeAppointment(i)}>X</button>
                </td>
              </tr>
            ))}
            <tr key="add-appointment">
              <td>{appointments.length + 1}</td>
              <td>
                <div className="ui fluid input">
                  <input
                    type="text"
                    placeholder="Name"
                    value={newName}
                    onChange={e => this.setState({ newName: e.target.value })}
                  />
                </div>
              </td>
              <td>
                <div className="ui fluid input">
                  <input
                    type="time"
                    value={newTime}
                    onChange={e => this.setState({ newTime: e.target.value })}
                  />
                </div>
              </td>
              <td>
                <div className="ui fluid input">
                  <input
                    type="text"
                    placeholder="Kind"
                    value={newKind}
                    onChange={e => this.setState({ newKind: e.target.value })}
                  />
                </div>
              </td>
              <td>
                  <button
                    className="mini positive ui button"
                    onClick={() => addAppointment(newName, newTime, newKind)}>Save</button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default PhysicianInfo;
