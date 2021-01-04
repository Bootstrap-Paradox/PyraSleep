function calculte() {
 var time = document.getElementById('time').value;
 let res = document.getElementById('time-section');
 if (res == null){
   time = 1;
 }
 res.innerHTML = parseInt(time) + 1.5;
}
