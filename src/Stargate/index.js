import React from 'react';
import StarMask from './StarMask';
import Stars from './Stars.svg';
import Starguides from './Starguides.svg';
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
    setTimeout(() => {
      this.setState( (state)=> {
        return {
          reversed_right: (state.reversed_right === false) ? 'star-container' : false,
          reversed_left: (state.reversed_left === false) ? 'star-container' : false,
        }
      });
    }, delay);
  };

  componentDidMount() {
    this.reversable(1000);
  }

  render() {
    return (
      <>
        <div className='gate-wrapper'>
          <StarMask></StarMask>
          <div className="stargate">
            <div className="occular">
              <div className={`left ${this.state.reversed_right}`} style={{
                  backgroundImage: (!this.state.reversed_right) ? 'none' : `url(${Stars})`,
                }}>
                <div className={`overlay`} style={{
                  backgroundImage: (!this.state.reversed_right) ? 'none' : `url(${Starguides})`,
                }}></div>
              </div>
              <div className={`right ${this.state.reversed_right}`} style={{
                  backgroundImage: (!this.state.reversed_right) ? 'none' : `url(${Stars})`,
                }}>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stargate;