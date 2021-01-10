

class Clock { // A Clock Class

  constructor(){
    this.time;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.meridiem = '';
    this.updateTime();
  }

  updateTime(){
    this._getTime();
    this._convertHour();
    this._timeToString();
  }

  _getTime(){
   var time = new Date(); // Created New Instance of Data
   this.hour = time.getHours();
   this.minute = time.getMinutes();
   this.second = time.getSeconds();
 }

 _convertHour() {
   // This methods converts the 24 hour method to 12 hour method

   let hour = this.hour;
   this.hour = this.hour % 12;

   if (this.hour == 0){
     this.hour = 12;
   }
   if (hour >= 0 && hour <= 12){
     this.meridiem = 'am';
   }else {
     this.meridiem = 'pm';
   }
 }

 _timeToString() {
   this.time = this.hour.toString() + " : " + this.minute.toString() + " " +this.meridiem;
 }

 // getTimeInfo(){
 //   return [this.hour, this.minute, this.second, this.meridiem];
 // }

}



// Ectends the fucntionality of  Clock
class calculateTime extends Clock {

  constructor(){
    super();
  }


  calculateSleepTime() {
    super.updateTime();
    this.displayTime();

  }


  displayTime(){
    console.log(this.time);
    document.getElementById("display-time").innerHTML = this.time;
  }



  _calculateTime(){

  }
  //Convert time
  //display time
  //add Calculated time for sleep
  // calculate time
}


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
