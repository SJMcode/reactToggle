/*
  Instructions
    Instead of having multiple methods to toggle "mode", create a single
    handleToggleMode method that is responsible for toggling
    the "mode".

    Also, render a single <button> instead of two.
*/

import * as React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light"
    };

    this.handleToggleMode = this.handleToggleMode.bind(this);
  }
  handleToggleMode() {
    this.setState(({ mode }) => ({
      mode: mode === "light" ? "dark" : "light"
    }));
  }

  render() {
    const { mode } = this.state;

    return (
      <main className={mode}>
        <button onClick={this.handleToggleMode}>
          {mode === "light" ? "Activate Light Mode" : "Activate Dark Mode"}
        </button>
      </main>
    );
  }
}

export default function App() {
  return <Container />;
}
