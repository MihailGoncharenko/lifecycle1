import React, { Component } from 'react'
import moment from "moment";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.name = props.time.name;
    this.timeZone = Number(props.time.timeZone);
    this.onDelete = props.onDelete;
    this.state = {
      timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss')});
  }

  render() {
    return (
      <div>
        <p>{this.name}</p>
        <div>
          <p>{this.state.timeZone}</p>
          <button onClick={() => this.onDelete(this.id)}>✘</button>
        </div>
      </div>
    )
  }
}