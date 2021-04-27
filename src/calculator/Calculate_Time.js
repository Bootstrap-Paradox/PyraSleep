
class SleepCalculator {

  calculateTime(newTime, backward=false) {
    return [this.calculateRemTime(newTime, backward),
      this._beautifyTime(
        newTime.getHours(),
        newTime.getMinutes()
    )];
  }

  scheduleIdleTime(hour, minute, meridiem, iterations=5, backward=false){
    return this.findIdleTime(this.getTime(hour, minute, meridiem), iterations, backward);
  }

  findIdleTime(time, iterations=5, backward=false) {
    const idleTimes = [];
    for (let i =0; i < iterations; i++){
      var [time, finalTime] = this.calculateTime(time, backward);
      idleTimes.push(finalTime);
    }
    return idleTimes;
  }

  getTime(hour, minute, meridiem){
      const newHour = this._convert_24_hour_method(hour, meridiem);
      const time = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay(),
      newHour,
      minute
    );
      return time;
  }



  _beautifyTime(hour, minute){
    let [convertedHour, meridiem] = this._convert_12_hour_method(hour);
    let newMinute = minute>=0 && minute <=9?''.concat("0",minute.toString()) :minute.toString();
    let newHour = convertedHour>=1 && convertedHour <=9?''.concat("0",convertedHour.toString()) :convertedHour.toString();
    return `${newHour}:${newMinute} ${meridiem}`;
  }

  calculateRemTime = (time, backward=false ,remMinute = 90) =>{
    if (backward){
      time.setMinutes(time.getMinutes() - remMinute);
    }else{
      time.setMinutes(time.getMinutes() + remMinute);
    }
    return time;
  }

  _getMeridiem = (hour) => (hour >= 0 && hour <= 11) || hour >= 24 ? 'am' : 'pm'; // Calculates the Meridiem for the hour


 _convert_12_hour_method(hour) {
   // This methods converts the 24 hour method to 12 hour method and meridiem
   let convertedHour = hour%12 !== 0 ? hour%12 : 12; // Converts 24 hour method to 12 hour method
   let meridiem = this._getMeridiem(hour);
   return [convertedHour, meridiem];
 }

 _convert_24_hour_method(hour, meridiem){
   if (meridiem == 'am'){
     return hour
   }else if (hour == 12 && meridiem == 'pm') {
     return 0;
   }
   else{
     return hour+12;
   }
 }

  roundOff(time){
    if (typeof time === 'object'){
      const reverseMinute = time.getMinutes().toString().split("").reverse().join("");
      let roundOff = parseInt((reverseMinute % 10) + 1) * 10;
      time.setMinutes(roundOff);
      return time;
    }else{
      throw 'Instance Invalid';
    }
  }

}

export default SleepCalculator;
