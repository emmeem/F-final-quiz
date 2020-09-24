import React, { Component } from 'react';
import './Group.scss';

class Group extends Component {
  state = {
    group: [],
  };


  render() {
    return (
      <section className="group-list">
        <h2>分组列表</h2>
          <button className="group-btn" onClick={this.getGroup}>
            分组学员
          </button>
      </section>
    );
  }
}

export default Group;