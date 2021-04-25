//import CalculateTime from '/Users/sid/Documents/Web Design/Pyra-Web-SleepCalculator/Sleep_Calculator/static/Javascript/packages/CalculateTime.js';
import {CalculateTime} from '../../calculator/Calculate_Time';

// To be Worked at End


let time = new CalculateTime();

export function powerNap(){
  return time.calculatePowerNap();
}

export function wakeUp(){
  let calTime = time.calculateWakeTime();
  return calTime;
}
