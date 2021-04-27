import React, {useState, useEffect} from 'react';
import {powerNap, wakeUp} from './scripts.js';
import {Link} from 'react-router-dom';

import './calculate.css';

import Sleep from '../../Asset/sleep.svg';

const Calculate = () => {

  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(powerNap().join(' , '))
}, []);

  return (
<div id="calculate-page">

  <section id="time-result-display">
  <h1 id='display-time'>{time}</h1>
  </section>

  <div className="btn-display">

    <BeautifulButton operation={() => {setTime(powerNap().join(' , '));}} name='Power Nap'/>
    <BeautifulButton operation={() => {setTime(wakeUp().join(' , '));}} name='Sleep Now'/>
    <Link to='/schedule' > <BeautifulButton operation={() => {}} name='Schedule' /> </Link>

  </div>
</div>
  );
}

const BeautifulButton = ({operation, name}) => {
  return (
    <div className="box-btn-lg-icon" onClick={operation}>

      <div className="box-btn-lg-icon-img-bg"></div>

      <img src={Sleep} />



      <h3>{name}</h3>

    </div>
  );
}

export default Calculate;
