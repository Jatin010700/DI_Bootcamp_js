import React from 'react';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  clickMe = () => {
    alert('I was clicked');
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      alert(`You pressed Enter with the value: ${inputValue}`);
    }
  };

  toggleState = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    const { isToggleOn } = this.state;

    return (
      <div>
        <h1>Events Component</h1>

        {/* Button that calls the clickMe function */}
        <button onClick={this.clickMe}>Click Me</button>

        {/* Input with onKeyPress event handler */}
        <input type="text" onKeyDown={this.handleKeyPress} />

        {/* Button that toggles the state property */}
        <button onClick={this.toggleState}>
          Toggle: {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Events;
