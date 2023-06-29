//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SimpleCounter from "./component/CardCounter.jsx";


//import your own components
// import Home from "./component/home.jsx";

let counter = 0;

const CounterName = () => {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);

  counter ++;

  // const start = () => {
  //   setInterval(counter ++,1000)
  
  
  // }
  // counter ++;
  // console.log(four,three, two,one);
  const reset =  () => {
     counter = 0;

  }