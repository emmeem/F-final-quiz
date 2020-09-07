import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    StudentList: [],
    Groups: {},
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
  
  splitGroup = () => {
    URL = "http://localhost:8080/groups"
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
          Groups: jsonData,
        })
    })
  }


  render() {
    console.log(this.state.StudentList)
    const result = this.state.StudentList.map(s =>{
      return <div className="students">
      <label>{s.id}.</label>
      <label>{s.studentName}</label>
      </div>
    })
    return (
      <div data-testid="app" className="App">
        <div className="GroupList">
          <h2>分组列表</h2>
          <button className="SpiltGroup" onClick="splitGroup()">分组学员</button>
        </div>
        <div className="StudentList">
          <h2>学员列表</h2>
          <div className="StudentInfo">
            {result}
            <button>+添加学员</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
