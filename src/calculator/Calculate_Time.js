import {Clock} from './clock';


// Extends the fucntionality of  Clock
export class CalculateTime extends Clock {

  constructor(){
    super();
    // this.nextTime;
    this.calSleepTime = [];
  }


  calculateWakeTime() {
    const [hour, minute] = super.getRaw();
    let newHour = hour;
    let newMinute = minute;
    let deviate = true;
    let calTime = [];
    for (let i = 0; i <5 ; i++){
        [newHour, newMinute] = this._calRemTime(newHour, newMinute, deviate);
        deviate = false;
        const [convertedHour, meridiem] = super._convert_12_hour_method(newHour);

        calTime.push(super._getTimeToString(convertedHour, newMinute, meridiem));
    }
    return calTime.join(' , ');
  }

  calculateScheduledWakeTime(hour, minute, meridiem){
    this._calculateRemTime(hour,minute, meridiem);
  }

  // calculateScheduledSleepTime(hour, minute, meridiem){
  //   console.log('it ran');
  // }

  // displayCalculatedTime(){
  //   //console.log(this.time);
  //   document.getElementById("display-time").innerHTML = this.calSleepTime.join(' , ');
  // }

  // calculateRemCurrentWakeTime(){ // Calculates the Current Rem Cycle to Wake up
  //   this._calculateRemTime(this.hour, this.minute);
  // }



  calculatePowerNap(){
    const [hour, minute] = super.getRaw();
    console.log(hour);
    let newHour = hour;
    let newMinute = minute;
    let calTime = [];
    for (let i = 0; i <= 2; i++){
      [newHour, newMinute] = this._calRemTime(newHour, newMinute);
      const [convertedHour, meridiem] = super._convert_12_hour_method(newHour);
      calTime.push(super._getTimeToString(convertedHour, newMinute, meridiem));
  }
  return calTime.join(' , ');
}


  // => => => => => => => => => => => => => => Rem Time Calculator

  _calRemTime(hour, minute, deviate=false){
    let newHour = 0;
    let newMinute = 0;
    if (deviate){
      if (minute >= 45){
        hour+= 1;
      }
      minute += 15;
    }


    if (minute >= 0 && minute <= 29){
      newHour = hour + 1;
      newMinute = minute + 30;
    }else{
      newHour = hour + 2;
      newMinute = minute + 30; // add 90 Minutes to the time if after minute > 30

      newMinute -= 60; // This brings the time back to the 60 minute Method
    }
    console.log(newHour, newMinute);
    return [newHour, newMinute];
  };
}
