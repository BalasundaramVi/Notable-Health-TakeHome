import React from 'react';
import axios from 'axios';

import Physicians from './Physicians';
import PhysicianInfo from './PhysicianInfo';

import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      physiciansList: [],
      currentPhysician: '',
      physicianInfo: undefined,
    };

    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    let { physiciansList, currentPhysician } = this.state;
    axios.get('/physicians')
      .then((res) => {
        physiciansList = res.data;
        if (currentPhysician === '') {
          [currentPhysician] = physiciansList;
          [currentPhysician] = currentPhysician.split(',');
          this.getInfo(currentPhysician);
        }
        this.setState({ physiciansList });
      });
  }

  getInfo(physician) {
    let { physicianInfo, currentPhysician } = this.state;
    currentPhysician = physician;
    axios.get(`/appointments/${physician}`)
      .then((res) => {
        physicianInfo = res.data;
        this.setState({ physicianInfo, currentPhysician });
      });
  }

  render() {
    const { physiciansList, currentPhysician, physicianInfo } = this.state;
    return (
      <div className="application">
        <div className="left-col">
          <h1 className="notable-logo">notable</h1>
          <Physicians
            getInfo={this.getInfo}
            physiciansList={physiciansList}
            currentPhysician={currentPhysician}
          />
          <div className="logout-feature">
            <button class="ui button">LOGOUT</button>
          </div>
        </div>
        <div className="right-col">
          { physicianInfo === undefined ? '' : <PhysicianInfo physicianInfo={physicianInfo} />}
        </div>
      </div>
    );
  }
}

export default App;
