import React, { Component } from "react";
import "./App.css";

class DataServer extends Component {
  state = {
    message: "",
    inputValue: "",
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch("/api/hello");
      const message = await response.text();
      this.setState({ message });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    try {
      const response = await fetch("/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputValue }),
      });

      const message = await response.text();
      console.log(`Server response: ${message}`);
      this.setState({ inputValue: "", message });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { message, inputValue } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Enter your message"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function App() {
  return <DataServer />;
}

export default App;
