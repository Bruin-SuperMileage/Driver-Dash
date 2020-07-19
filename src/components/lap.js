import React from 'react';

class Lap extends React.Component{

    render() {
        return (
          <div>
            <div className="lap">
                <div className="card-content">
                    <p className="has-text-centered">Current Lap: {this.props.lap["current"]}</p>
                    <p className="has-text-centered">Current Lap Time: {this.props.lap["remaining"]}</p>
                </div>
            </div>
          </div>
        );
     }
};

     
export default Lap;