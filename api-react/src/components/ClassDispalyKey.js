import React, { Component } from 'react';

class ClassDispalyKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyCode: null,
    };
  }

  handleKeyDown = event => {
    console.log(event);
    this.setState({ keyCode: event.code });
  };

  componentDidMount = () => {
    console.log('Le composant est monté');
    document.addEventListener('keyup', this.handleKeyDown);
  };

  componentWillUnmount() {
    console.log('Le composant est démonté');
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { keyCode } = this.state;

    return (
      <div className="card bg-info p-5 m-4 text-white">
        <div className="body">
          <h1 className="card-title">{keyCode}</h1>

          {/* <button className="btn btn-primary m-4" onClick={this.handleKeyDown}>
            Cliquer sur une touche
          </button> */}
        </div>
      </div>
    );
  }
}

export default ClassDispalyKey;
