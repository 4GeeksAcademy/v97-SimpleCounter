//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/CardCounter.jsx";

//import your own components

let counter = 0;
var intervalid;
var six = 0;
var five = 0;
var four = 0;
var three = 0;
var two = 0;
var one = 0;



window.onload = upCounter();

function numbers() {
  six = Math.floor(counter / 100000);
  five = Math.floor(counter / 10000);
  four = Math.floor(counter / 1000);
  three = Math.floor(counter / 100);
  two = Math.floor(counter / 10);
  one = Math.floor(counter / 1);

  return six, five, four, three, two, one;
}

function stopTimer() {
  clearInterval(intervalid);
}

const reset = () => {
  counter = 0;
  stopTimer();
  upCounter();
};

function upCounter() {
  intervalid = setInterval(Counter, 1000);
  Counter();
}
function downCounter() {
  intervalid = setInterval(dnCounter, 1000);
  dnCounter();
}

document.getElementById("downButton").addEventListener("click", function () {
  stopTimer();
  // mode = "down";
  counter = document.getElementById("downNumber").value;
  downCounter();
});

document.getElementById("start").addEventListener("click",function(){
  stopTimer();
  upCounter();
})

document.getElementById("stop").addEventListener("click",stopTimer)
document.getElementById("reset").addEventListener("click",reset)


function Counter() {
  numbers();

  ReactDOM.render(
    <SimpleCounter
      first={one}
      second={two}
      third={three}
      fourth={four}
      fifth={five}
      sixth={six}
      reset={reset}
      start={upCounter}
      stop={stopTimer}
    />,
    document.querySelector("#app")
  );

  counter++;
  
}

function dnCounter() {
  numbers();

  ReactDOM.render(
    <SimpleCounter
      first={one}
      second={two}
      third={three}
      fourth={four}
      fifth={five}
      sixth={six}
      
    />,
    document.querySelector("#app")
  );

  counter--;
  
}

