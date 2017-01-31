//Button variables
var add_btn = document.getElementById("addition");
var sub_btn = document.getElementById("subtraction");
var mul_btn = document.getElementById("multiplication");
var div_btn = document.getElementById("division");
var button = document.getElementById("equal");
var answerDiv = document.getElementById("answer");
var one_btn = document.getElementById("1");
var two_btn = document.getElementById("2");
var three_btn = document.getElementById("3");
var four_btn = document.getElementById("4");
var five_btn = document.getElementById("5");
var six_btn = document.getElementById("6");
var seven_btn = document.getElementById("7");
var eight_btn = document.getElementById("8");
var nine_btn = document.getElementById("9");
var zero_btn = document.getElementById("0");

var cN = answerDiv.innerHTML;

//Display 1
function dBox1 () {
    answerDiv.innerHTML += "1";
    console.log(answerDiv.innerHTML);
    return cN = Number(answerDiv.innerHTML);
  }
function dBox2 () {
      answerDiv.innerHTML += "2";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
    }
function dBox3 () {
      answerDiv.innerHTML += "3";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }
function dBox4 () {
      answerDiv.innerHTML += "4";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
        }
function dBox5 () {
      answerDiv.innerHTML += "5";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }
function dBox6 () {
      answerDiv.innerHTML += "6";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }
function dBox7 () {
      answerDiv.innerHTML += "7";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }
function dBox8 () {
      answerDiv.innerHTML += "8";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }
function dBox9 () {
      answerDiv.innerHTML += "9";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
        }
function dBox0 () {
      answerDiv.innerHTML += "0";
      console.log(answerDiv.innerHTML);
      return cN = Number(answerDiv.innerHTML);
      }

/*if (one_btn === true){
  answerDiv.innerHTML += "1";
  console.log(answerDiv.innerHTML)
}

if (add_btn === true){
  function add (answerDiv, nN) {

    var sum = answerDiv + nN;
    answerDiv.innerHTML =+ sum;
  }
} else if (sub_btn === true) {
  function subtract (answerDiv, nN) {

    var difference = number1 - number2;
    answerDiv.innerHTML =+ difference;
  }
} else if (mul_btn === true) {
  function multiply (num1, num2) {

    var product = number1 * number2;
    answerDiv.innerHTML =+ product;
  }
} else if (div_btn === true) {
  function divide (num1, num2) {

  var divisor = number1 / number2;
  answerDiv.innerHTML =+ divisor;
  }
}*/


//Number click event
one_btn.addEventListener('click', dBox1);
two_btn.addEventListener('click', dBox2);
three_btn.addEventListener('click', dBox3);
four_btn.addEventListener('click', dBox4);
five_btn.addEventListener('click', dBox5);
six_btn.addEventListener('click', dBox6);
seven_btn.addEventListener('click', dBox7);
eight_btn.addEventListener('click', dBox8);
nine_btn.addEventListener('click', dBox9);
zero_btn.addEventListener('click', dBox0);

/*
//Operator click events
add_btn.addEventListener('click', add);
sub_btn.addEventListener('click', subtract);
mul_btn.addEventListener('click', multiply);
div_btn.addEventListener('click', divide);
button.addEventListener('click', equal);*/
