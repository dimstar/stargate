import React from 'react';
import StarMask from './StarMask';
import Splat from './Splat';
import './Stargate.css';

class Stargate extends React.Component {
  constructor() {
    super();

    this.state = {
      reversed_right: false,
      reversed_left: 'reversed',
    }
  }

  reversable = (delay) => {
    setInterval(() => {
      this.setState( (state)=> {
        return {
          reversed_right: (state.reversed_right === false) ? 'reverse' : false,
          reversed_left: (state.reversed_left === false) ? 'reverse' : false,
        }
      });
    }, delay);
  };

  componentDidMount() {
    this.reversable(6000);
  }

  render() {
    return (
      <>
          <div className="stargate">
            <div className="occular">
              <div className={`left ${this.state.reversed_right}`}>
                <Splat></Splat>
              </div>
              <div className={`right ${this.state.reversed_right}`}></div>
            </div>
          </div>
        <div className='gate-wrapper'>
          <StarMask></StarMask>
        </div>
      </>
    );
  }
}

export default Stargate;