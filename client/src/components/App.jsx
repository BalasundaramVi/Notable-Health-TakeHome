import React from 'react';

import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="application">
        <h2>Notable Take Home</h2>
      </div>
    );
  }
}

export default App;
