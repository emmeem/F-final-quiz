import React, { Component } from 'react';
import './trainees.scss';

class Trainees extends Component {
  state = {
    trainees: [],
  };

  componentDidMount = () => {
    this.getTrainees();
  };

  getTrainees = () => {
    URL = 'http://localhost:8080/trainees';
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
          trainees: jsonData,
        });
      });
  }

  render() {
    return (
      <section className="trainees-list">
        <h2>学员列表</h2>
        <ul className="trainees-list-content">
          {this.state.trainees.map((trainee) => (
            <li>{trainee.id}. {trainee.name}</li>))
          }
        </ul>
      </section>
    );
  }
}

export default Trainees;