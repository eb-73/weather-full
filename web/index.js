
function time(){
let t=new Date();

let h=t.getHours();
let m=t.getMinutes();
let s=t.getSeconds();
m = check(m);
s = check(s);
function check(i){
  if (i<10){i = "0" + i};
  return i;
}
  document.querySelector(".clock h1").innerHTML=h + ":" + m + ":" + s;
 //document.querySelector(".clock h1").innerHTML= new Date().toLocaleTimeString();
}
setInterval(time,1000);

let day;
let month;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
switch (new Date().getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case  6:
    month = "July";
    break;
  case  7:
    month = "August";
  break;
  case  8:
    month = "September";
    break;
  case  9:
    month = "October";
    break;
  case  10:
    month = "November";
    break;
  case  11:
    month = "December";


}
document.querySelectorAll(".clock h4")[0].innerHTML=day+","+month+" "+new Date().getDate();
document.querySelectorAll(".clock h4")[1].innerHTML= new Date().getFullYear();
