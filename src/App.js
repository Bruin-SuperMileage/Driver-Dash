import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Speed from './components/speed';
import Lap from './components/lap'
import Speedometer from './components/speedometer'

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// Launch fullscreen for browsers that support it!
launchFullScreen(document.documentElement); // the whole page

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latestTime: '',
      latestTrial: '',
      latestData: {},
      lap: {},
      speed: {},
      speedometer: {},
    };
  }

  componentDidMount() {
    let database = firebase.database();

    //sets the time
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();
      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();

        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = {};
          latestData1 = snapshot.val();
          var speed = latestData1["speed"];
          var lap = latestData1["lap"];

          this.setState({
            latestData: latestData1,
            speed: speed,
            speedometer: speed,
            lap: lap,
          })
        });
        
        this.setState({
          latestTrial: latestTrial1
        })
      });

      this.setState({
        latestTime: latestTime1
      })
    });
  }
  
  render() {
    return (
      <div className="canvas color-dark" style={{paddingTop: '45px'}}>
        <div className="columns is-vcentered">
          <div className="column is-one-third">   
            <Speed speed={this.state.speed} />
          </div>
          <div className="column ">
            <Speedometer speedometer={this.state.speed}/>
            <Lap lap={this.state.lap} />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
