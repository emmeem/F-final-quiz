import React, { Component } from 'react';
import Group from "../components/Group/Group"
import Trainees from '../components/Trainee/Trainees';
import Trainers from '../components/Trainer/Trainers';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <Group />
          <Trainers />
          <Trainees />
        </body>
      </div>
    );
  }
}

export default App;
