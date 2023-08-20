import React, { useState } from 'react';
import './styles.css';

const Baloon = () => {
  const [inflation, setInflation] = useState(0);

  const inflateBalloon = () => {
    setInflation(inflation + 10);
  };

  return (
    <div className="balloon" style={{ transform: `scale(${1 + inflation / 100})` }}>
      <button onClick={inflateBalloon}>Inflate Balloon</button>
    </div>
  );
};

export default Baloon;
