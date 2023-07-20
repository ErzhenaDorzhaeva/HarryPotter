import React from "react";
export default class Madal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          {" "}
          Распределить{" "}
        </button>
        {this.state.isOpen && (
          <div>
            <div>
              <button on onClick={() => this.setState({ isOpen: false })}>
                {" "}
                Close{" "}
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
