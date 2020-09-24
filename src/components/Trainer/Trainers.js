import React, { Component } from 'react';
import './trainers.scss';

class Trainers extends Component {
  state = {
    trainers: [],
  };

  componentDidMount = () => {
    this.getTrainers();
  };

  getTrainers = () => {
    URL = 'http://localhost:8080/trainers';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          Promise.reject();
        }
      })
      .then((jsonData) => {
        this.setState({
          trainers: jsonData,
        });
      });
  }

  render() {
    return (
      <section className="trainers-list">
        <h2>讲师列表</h2>
        <ul className="trainers-list-content">
          {this.state.trainers.map((trainer) => (
            <li>{trainer.id}. {trainer.name}</li>))}
        </ul>
      </section>
    );
  }
}

export default Trainers;