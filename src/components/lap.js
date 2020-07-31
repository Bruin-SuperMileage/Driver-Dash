import React from 'react';

class Lap extends React.Component{
  constructor(props) {
    super(props)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    isRunning: "False",
    lapNumber: 1
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: Date.now(),
      timerTime: 0,
    });
  };

  componentDidMount = () => {
    if (this.props.lap["running"] === "True") {
      if (this.props.lap["running"] === "True") {
        this.resetTimer();
        this.startTimer();
        this.setState({
          isRunning: "True"
        })
      }
      else if (this.props.lap["running"] === "False") {
        this.stopTimer();
        this.setState({
          isRunning: "False"
        })
      }
    }

  };

  componentDidUpdate = () => {
    const {isRunning, lapNumber } = this.state;
    if (isRunning !== this.props.lap["running"]) {
      if (this.props.lap["running"] === "True") {
        console.log("Starting start")
        this.resetTimer();
        this.startTimer();
        this.setState({
          isRunning: "True"
        })
      }
      else if (this.props.lap["running"] === "False") {
        console.log("Ending end");
        this.stopTimer();
        this.setState({
          isRunning: "False"
        })
      }
    }
    console.log("state: " + lapNumber)
    console.log("current: " + this.props.lap["current"])
    if (lapNumber !== this.props.lap["current"]) {
      console.log("lapNumber")
      //this.stopTimer();
      this.resetTimer();
      //this.startTimer();
      this.setState({
        lapNumber: this.props.lap["current"]
      })
      console.log("setState")
    }
  }

  render = () => {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);    
    return (
      <div>
        <div className="lap">
            <div className="card-content">
                <p className="has-text-centered">Lap {this.props.lap["current"]}</p>
                <p className="has-text-centered">{minutes} : {seconds} : {centiseconds}</p>
            </div>
        </div>
      </div>
    );
  }

};

     
export default Lap;