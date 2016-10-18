/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply(multA, multB) {
  let product = multA * multB;
  return product;
}






/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


function add(addA, addB) {
  let sum = parseInt(addA) + parseInt(addB);
  return sum;
}




/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


function subtract(subtA, subtB) {
  let difference = subtA - subtB;
  return difference;
}






/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(diviA, diviB) {
  let quotient = diviA / diviB;
  return quotient;
}






/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


 function calculator(numbA, numbB, calculation){
  console.log("calculation", calculation, typeof(calculation));
  let results = window[calculation](numbA, numbB);
  return results;
 }



// trying to identify which button was pressed


var eventLocation;

function targetIdentifier(event){
  console.log("event", event);
  eventLocation = event.target.innerHTML;
}


document.getElementById("buttons").addEventListener("click", targetIdentifier);
document.getElementById("buttons").addEventListener("click", initializeCalc);





function initializeCalc() {
  let numberA = document.getElementById("numberA").value;
  let numberB = document.getElementById("numberB").value;
  console.log("eventLocation", eventLocation);
  let answer = calculator(numberA, numberB, eventLocation);
  // console.log("answer", answer);
  // let buttonPressed = document.
  document.getElementById("answerDisplay").innerHTML = answer;

}











