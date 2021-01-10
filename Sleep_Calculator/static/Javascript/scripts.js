
class calculateTime  {

  constructor(){
    this.name = "Clock";
  }


  calculateSleepTime() {
    let [hour, min] = this.getTime();
    console.log(hour);
  }


   calculate(){
    return this.getTime();
  }

   getTime(){
    let hour,minute;
    var time = new Date(); // Created New Instance of Data
    hour = time.getHours();
    minute = time.getMinutes();
    return [hour, minute];
  }

  displayTime(hour, minute){

  }

  // calculate: function(){
  //   return this.getTime();
  // },
  // getTime : function(){
  //   let hour,minute;
  //   var time = new Date(); // Created New Instance of Data
  //   hour = time.getHours();
  //   minute = time.getMinutes();
  //   return [hour, minute];
  // },
  // addSleepTime: function() {
  //
  // },
  //
}


function calculate(){
  // Main use of this func is to SHOW CASE the time Calculated on the Webpage.
  let time = new calculateTime();
  time.calculateSleepTime();
  // document.getElementById('display-time').innerHTML = currentTime;
}

calculate();


// The window is available only on the web Browser

// window.onload = function(){
//   calculate();
// }
