import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Speed from './components/speed';
import Time from './components/time'
import Lap from './components/lap'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latestTime: '',
      latestTrial: '',
      latestData: {},
      battery: {},
      driver: {},            
      gps: {},
      joulemeter: {},
      lap: {},
      motor: {},
      speed: {},
      time: {},
      track: {},
      weather: {},
    };
  }

  componentDidMount() {
    let database = firebase.database();

    //sets the time
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();
      { console.log(latestTime1) }
      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();
        { console.log(latestTrial1) }

        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = {};
          latestData1 = snapshot.val();
          var speed = latestData1["speed"];
          var lap = latestData1["lap"];
/*           var latestData1 = {};
          latestData1 = snapshot.val();
          var speed = 0
          var weather = 0 */

          this.setState({
            latestData: latestData1,
            speed: speed,
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
      <div class="canvas color-dark" style={{paddingTop: '45px'}}>
        <div class="columns">
          <div class="column">   
            <Speed speed={this.state.speed} />
          </div>
          <div class="column lap">
            {/* <Time time={this.state.time} /> */}
            <Lap lap={this.state.lap} />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
