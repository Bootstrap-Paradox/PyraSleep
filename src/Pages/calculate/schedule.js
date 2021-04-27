import React, {useState,useEffect ,useRef} from 'react';
import {Link} from 'react-router-dom';

import {scheduleWakeTime, scheduleSleepTime} from './scripts.js';

import './calculate.css';

import Sleep from '../../Asset/sleep.svg';

const Schedule = () => {

  const [time, setTime] = useState('Know When to Wake up');

  const getSelectedElement = () => {
    const hours = document.getElementById('hours').value;
    const minutes = parseInt(document.getElementById('minutes').value);
    const meridiem = document.getElementById('meridiem').value;
    return [hours, minutes, meridiem];
  }


  return (
<div id="calculate-page">

  <section id="time-result-display">
  <h1 id='display-time'>{time}</h1>
  </section>

  <section>
  <InputElement />
  </section>

  <div className="btn-display">

    <BeautifulButton operation={() => {setTime(scheduleWakeTime(getSelectedElement()).join(' , '));}} name='Sleep At'/>
    <BeautifulButton operation={() => {setTime(scheduleSleepTime(getSelectedElement()).join(' , '));}} name='Wake Up At'/>
    <Link to='/calculate' ><BeautifulButton operation={() => {}} name='Calculate' /></Link>

  </div>
</div>
  );
}

const InputElement = () => {

  const hours = [1,2,3,4,5,6,7,8,9,10,11,12];
  const minutes = [];
  for (let i = 0; i< 60; i++){

    if (i % 5 === 0){
      minutes.push(i);
    }
  }
  return (
    <form className="form">
    <label htmlFor="hours"></label>
    <select id='hours'>
      {hours.map((number) => <option value={number}>{number}</option>)}
    </select>

    <label htmlFor="minutes"></label>
    <select id='minutes'>
      {minutes.map((number) => <option value={number}>{number}</option>)}
    </select>

    <label htmlFor="meridiem"></label>
    <select id="meridiem">
      <option value="am">am</option>
      <option value="pm">pm</option>
    </select>

    </form>
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
