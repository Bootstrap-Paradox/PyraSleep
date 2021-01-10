
let calculateTime = {
  calculate: function(){
    return this.getTime();
  },
  getTime : function(){
    let hour,minute;
    var time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    document.getElementById('display-time').innerHTML= hour;
    return [hour, minute];
  }
}


function calculate(){
  // Main use of this func is to SHOW CASE the time Calculated on the Webpage.
  console.log(calculateTime.calculate());
}

calculate();

window.onload = function(){
  calculate();
}
