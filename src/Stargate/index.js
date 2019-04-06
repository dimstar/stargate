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
      <main><h1>kyle magee</h1></main>
    </>
  );
}

export default Stargate;