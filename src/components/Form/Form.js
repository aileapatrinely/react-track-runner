import React, { Component } from 'react';
import style from './Form.module.css';
import swal from 'sweetalert';

class Form extends Component {
  state = {
    runLength: 0,
    recent: 0,
    runSpeed: 0,
    longest: 0,
    fastest: 0,
    recentSpeed: 0,
  };
  addRun = (event) => {
    event.preventDefault();
    this.setState({
      recent: this.state.runLength,
      recentSpeed: this.state.runSpeed,
    });
    if (this.state.runLength > this.state.recent) {
      this.setState({
        recent: this.state.runLength,
        longest: this.state.runLength,
      });
      swal('Congrats! You broke your distance record!');
    }
    if (this.state.runSpeed > this.state.recentSpeed) {
      this.setState({
        fastest: this.state.runSpeed,
      });
      swal('Congrats! You broke your speed record!');
    }
    if (this.state.runLength < 0 || this.state.runSpeed < 0) {
      swal('Run Length and Run Speed cannot be less than 0!', 'warning');
    }
  };
  //   setDate = (event) => {
  //     this.setState({
  //       form: {
  //         runDate: event.target.value,
  //       },
  //     });
  //   };

  setDistance = (event) => {
    console.log(event.target.value);
    this.setState({
      runLength: event.target.value,
    });
  };

  setSpeed = (event) => {
    this.setState({
      runSpeed: event.target.value,
    });
  };
  render() {
    return (
      <form className="container" onSubmit={this.addRun}>
        {/* <input
          type="date"
          placeholder="Date of Run"
          onChange={this.setDate}
          required
        /> */}
        <input
          type="number"
          placeholder="Distance in miles"
          onChange={this.setDistance}
          required
        />
        <input
          type="number"
          placeholder="Speed in mph"
          onChange={this.setSpeed}
          required
        />
        <button onClick={this.addRun}>Add Run</button>
        <h2>Recent Runs</h2>
        <div>
          <h3 className={style.h3}>Most Recent:</h3>
          {this.state.recent}
          <h3 className={style.h3}>Longest Run:</h3>
          {this.state.longest}
          <h3 className={style.h3}>Fastest Run:</h3>
          {this.state.fastest}
        </div>
      </form>
    );
  }
}

export default Form;
