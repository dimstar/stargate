import React from 'react';

const StarMask = () => {
  return (
    <svg className='splat'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 959 1079" width="100" height="100" preserveAspectRatio="xMidYMin slice">
      <defs>
        <pattern id="myPattern"
                x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse" >
            <circle cx="10" cy="10" r="7" style={{stroke: 'none', fill: 'lightcoral'}} />
        </pattern>
      </defs>

      <rect width="100%" height="100%" style={{stroke: 0, fill: 'url(#myPattern)'}} />
    </svg>
  );
}

export default StarMask;