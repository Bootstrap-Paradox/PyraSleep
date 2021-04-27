//import CalculateTime from '/Users/sid/Documents/Web Design/Pyra-Web-SleepCalculator/Sleep_Calculator/static/Javascript/packages/CalculateTime.js';
import SleepCalculator from '../../calculator/Calculate_Time';

// To be Worked at End


var sleep = new SleepCalculator();

export function powerNap(){
  return sleep.findIdleTime(sleep.roundOff(new Date()), 3);
}

export function wakeUp(){
  return sleep.findIdleTime(sleep.roundOff(new Date()));
}

export function scheduleWakeTime([hour, minute, meridiem]){
  return sleep.scheduleIdleTime(hour, minute, meridiem);
}

export function scheduleSleepTime([hour, minute, meridiem]){
  return sleep.scheduleIdleTime(hour, minute, meridiem,5, true).reverse();
}
