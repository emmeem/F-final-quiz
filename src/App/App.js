import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <div className="GroupList">
          <h2>分组列表</h2>
          <button className="SpiltGroup">分组学员</button>
        </div>
        <div className="StudentList">
          <h2>学员列表</h2>
        </div>
      </div>
    );
  }
}

export default App;
