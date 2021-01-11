
class Clock { // A Clock Class

  constructor(){
    this.time;
    this.timeWithSeconds;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.meridiem = '';
    this.updateTime();
  }

  updateTime(){
    this._getTime();
    [this.hour, this.meridiem] = this._convertHour(this.hour);
    this.time = this._getTimeToString(this.hour, this.minute, this.second, this.meridiem);
  }

  _getTime(){
   var time = new Date(); // Created New Instance of Data
   this.hour = time.getHours();
   this.minute = time.getMinutes();
   this.second = time.getSeconds();
 }

 _convertHour(hour) {
   // This methods converts the 24 hour method to 12 hour method

   let newHour = hour % 12;
   let meridiem;
   if (newHour == 0){
     newHour = 12;
   }
   if (hour >= 24){
   }
   if (hour >= 0 && hour < 12){
     meridiem = 'am';
   }else {
     meridiem = 'pm';
     if (hour >= 24){
       meridiem = "am";
     }
   }
   return [newHour, meridiem];
 }


 _getTimeToString(hour, minute, meridiem) {
   let min = minute>=1 && minute <=9?''.concat("0",minute.toString()) :minute.toString();
   let h = hour>=1 && hour <=9?''.concat("0",hour.toString()) :hour.toString();
   let time = h + ":" + min + " " + meridiem;
   //this.timeWithSeconds = this.hour.toString() + " : " + this.minute.toString() + " : " + this.second.toString() + " " + this.meridiem;
   return time;
 }
}



// Extends the fucntionality of  Clock
class calculateTime extends Clock {

  constructor(){
    super();
    this.nextTime;
    this.calSleepTime = [];
  }


  calculateSleepTime() {
    super.updateTime();
    this._calculateTime();
    this.displayTime();
  }


  displayTime(){
    console.log(this.time);
    document.getElementById("display-time").innerHTML = this.calSleepTime.join(' , ');
  }

  _addToList(hour, min){
    let meridiem;
    [hour, meridiem] = super._convertHour(hour);
    let time = super._getTimeToString(hour, min, meridiem);
    this.calSleepTime.push(time);
  }

  _calculateTime(){
    // Cal upto 5 sleep session
    let hour = this.hour;
    let min = this.minute;
    for (let i = 0; i <= 5; i++){
    if (min >= 0 && min <= 29){
      hour+=1;
      min+=30;
      if (hour >= 12){
        this._addToList(hour,min);
      }
    }else {
      hour += 2;
      min += 30;
      min -= 60;
      min %= 6;
      this._addToList(hour, min);
    }
  }
console.log(this.calSleepTime.join(", "));


    //console.log(this.calSleepTime.push(time));
  }

}
  //add Calculated time for sleep
  // calculate time


function calculate(){
  // Main use of this func is to SHOW CASE the time Calculated on the Webpage.
  let time = new calculateTime();
  time.calculateSleepTime();
}

calculate();


// The window is available only on the web Browser

// window.onload = function(){
//   calculate();
// }
