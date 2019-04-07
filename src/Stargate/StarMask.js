import React from 'react';
const StarMaskStyle = {
  'fill':'#fff'
};

const StarMask = () => {
  return (
    <svg className="starmask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1918 1079" width="100" height="100" preserveAspectRatio="xMidYMin slice">
      {/* <path className="a" style={StarMaskStyle} d="M0,0V1079H1918V0ZM731,1078,959,529l228,549Z"/> */}
      <polygon class="a" style={StarMaskStyle} points="0 0 0 1079 584.69 1079 959 533 1333.31 1079 1918 1079 1918 0 0 0"/>
    </svg>
  );
}

export default StarMask;