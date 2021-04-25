export class Clock { // A Clock Class

  constructor(){
    // this.time; // Universal Time Storage

    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.meridiem = '';
    this.updateTime();
  }

  getTime(){
    const time = this.updateTime();
    return time;
  }

  getRaw(){
    return this._fetchTime();
  }

  _fetchTime(){ // Gets the Time from the Date Module
   var time = new Date(); // Created New Instance of Data
   const hour = time.getHours();
   const minute = time.getMinutes();
   const seconds = time.getSeconds();
   return [hour, minute, seconds];
 }

  updateTime(){
    let [hour, minute, seconds] = this._fetchTime(); // Gets the time from the Date Class
    return this.setTime(hour, minute); // Sets the time variable
  }

  setTime(hour, minute){
    const [convertedHour, meridiem] = this._convert_12_hour_method(hour);
    return this._getTimeToString(convertedHour, minute, meridiem); // Converts the Numbers to String to be Viewed
  }

  displayTime(){
    [this.hour, this.meridiem] = this._convert_12_hour_method(this.hour); // converts 24 Hours Method in to 12 Hours
    this.setTime();
  }



  getMeridiem = (hour) => (hour >= 0 && hour <= 11) || hour >= 24 ? 'am' : 'pm'; // Calculates the Meridiem for the hour


 _convert_12_hour_method(hour) {
   // This methods converts the 24 hour method to 12 hour method and meridiem
   let convertedHour = hour%12 !== 0 ? hour%12 : 12; // Converts 24 hour method to 12 hour method
   let meridiem = this.getMeridiem(hour);
   return [convertedHour, meridiem];
 }

// This feature must be added in the future
_convert_24_hour_method(hour, meridiem){
  if (meridiem == 'am'){
    return hour
  }else if (meridiem == 'pm'){
    return hour+12;
  }
}


 // Converts the time to String
 _getTimeToString(hour, minute, meridiem) {
   let newMinute = minute>=0 && minute <=9?''.concat("0",minute.toString()) :minute.toString();
   let newHour = hour>=1 && hour <=9?''.concat("0",hour.toString()) :hour.toString();

   let time = newHour + ":" + newMinute + " " + meridiem;

   return time;
 }
}
