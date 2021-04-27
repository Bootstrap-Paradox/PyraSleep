//import CalculateTime from '/Users/sid/Documents/Web Design/Pyra-Web-SleepCalculator/Sleep_Calculator/static/Javascript/packages/CalculateTime.js';
import SleepCalculator from '../../calculator/Calculate_Time';

// To be Worked at End


var sleep = new SleepCalculator();

export function powerNap(){
  return sleep.calPowerNap(sleep.roundOff(new Date()));
}

export function wakeUp(){
  return sleep.calWakeTime(sleep.roundOff(new Date()));
}
