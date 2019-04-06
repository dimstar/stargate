import React from 'react';
import StarMask from './StarMask';
// import Stars from './Stars';
import './Stargate.css';


const Stargate = () => {
  return (
    <>
        <div className="stargate">
          <div className="occular">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      <div className="gate-wrapper">
        <StarMask></StarMask>
      </div>
    </>
  );
}

export default Stargate;