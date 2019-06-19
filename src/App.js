import React, { Component } from 'react';
import './App.css';
import DragablesList from './dragables/DragablesList'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.pageX, y: e.pageY });
  }

  render() {
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <DragablesList />
        <DragablesList />
        <p>
          y: {this.state.y}
        </p>
        
        <p>
          x: {this.state.x} 
        </p>
      </div>
    );
  }
}

export default App;
