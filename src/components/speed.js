import React from 'react';

class Speed extends React.Component{
    render() {
        return (
          <div classNAme="columns">
               <div className="column">
                    <p className = "speed has-text-centered">{this.props.speed.speed}</p>
                    <p className = "speed has-text-centered km">km/h</p>
               </div>
          </div>
        );
     }
};

export default Speed;