import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './calculate.css';

import Sleep from '../../Asset/sleep.svg';

const Schedule = () => {

  const [time, setTime] = useState('');

  return (
<div id="calculate-page">

  <div id="time-result-display">
  <h1 id='display-time'>{time}</h1>
  </div>

  <div className="btn-display">

    <BeautifulButton operation={() => {}} name='Wake'/>
    <BeautifulButton operation={() => {}} name='Sleep'/>
    <Link to='/calculate' ><BeautifulButton operation={() => {}} name='Calculate' /></Link>

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

export default Schedule;
