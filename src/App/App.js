import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    StudentList: [],
  }

  componentDidMount = () => {
    URL = "http://localhost:8080/students"
    fetch(URL, {
        method:"GET",
    }).then(Response => {
        if (Response.status === 200) {
            return Response.json();
        }
        else {
            Promise.reject();
        }
    }).then(jsonData => {
        this.setState({
          StudentList: jsonData,
        })
    })
}

  render() {
    console.log(this.state.StudentList)

    return (
      <div data-testid="app" className="App">
        <div className="GroupList">
          <h2>分组列表</h2>
          <button className="SpiltGroup">分组学员</button>
        </div>
        <div className="StudentList">
          <h2>学员列表</h2>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
