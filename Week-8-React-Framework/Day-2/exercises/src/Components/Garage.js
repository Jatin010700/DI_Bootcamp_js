import React from "react";

class Garage extends React.Component{
  constructor(props) {
      super(props);
      this.state ={size: 'small'}
  }
  
  render() {
     return (
    <div>
      <h1>Who lives in my {this.state.size} Garage</h1>
    </div>
     )
  }
}

export default Garage