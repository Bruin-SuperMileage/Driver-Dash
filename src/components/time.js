import React from 'react';

class Time extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: "",
    };
  }

  componentWillMount() {
    var endString = " AM";
    var today = new Date();
    var hours = today.getHours();
    if (hours > 12) {
    hours -= 12;
    endString = " PM";
    };
    var time1 = hours + ":" + today.getMinutes() + ":" + today.getSeconds() + endString;
    
    this.setState({
    time: time1,
    })
}


    render() {
        return (
            <div className="columns">
                <div className = "column">
                    {this.state.time}
                </div> 
            </div>
        );
    }
};

export default Time;