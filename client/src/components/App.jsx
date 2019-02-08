import React from 'react';

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
        <h2>Hello World!</h2>
      </div>
    );
  }
}

export default App;
