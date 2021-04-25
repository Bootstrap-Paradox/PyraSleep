import React, {useState, useEffect} from 'react';
import {powerNap, wakeUp} from './scripts.js';

import './calculate.css';

import Sleep from '../../Asset/sleep.svg'

const Calculate = () => {

  const [time, setTime] = useState('');

  const calculatePowerNap = () => {
    setTime(powerNap());
  }

  const calculateWakeTime = () => {
    setTime(wakeUp());
  }

  const test = () => {
    var minToAdd = 90;
    var currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + minToAdd*60000);
    console.log(futureDate);
    setTime(futureDate.toString());
  }

  useEffect(() => {
  calculatePowerNap();
  // console.log('Hello');
}, []);

  return (
<div id="calculate-page">

  <div id="time-result-display">
  <h1 id='display-time'>{time}</h1>
  </div>

  <div className="btn-display">

    <BeautifulButton calculate={calculatePowerNap} name='Power Nap'/>
    <BeautifulButton calculate={calculateWakeTime} name='Sleep Now'/>
    <BeautifulButton calculate={test} name='Test' />

  </div>
</div>
  );
}

const BeautifulButton = ({calculate, name}) => {
  return (
    <div className="box-btn-lg-icon" onClick={calculate}>

      <div className="box-btn-lg-icon-img-bg"></div>

      <img src={Sleep} />



      <h3>{name}</h3>

    </div>
  );
}

export default Calculate;
