let resultInput = document.getElementById('result');

function appendValue(value) {       //function for appending a number i.e operand
  resultInput.value += value;
}

function appendOperator(operator) {             //function for appending a operator
  resultInput.value += ' '+operator+' ';
}

function calculateResult() {                    //function for calculating a result
  try {
    let result = eval(resultInput.value);       
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}
function deleteLeft() {                                     //function for a backspace
  let currentValue = resultInput.value;         
  resultInput.value = currentValue.slice(0, -1);
}

function clearResult() {                                  //function for clear display or AC
  resultInput.value = '';
}
for (var i = 0; i < document.querySelectorAll(".key").length; i++) {           //adding event listners as click for numbers i.e operands
document.querySelectorAll(".key")[i].addEventListener("click", function() {
  appendValue(this.innerText);
});
}       
for (var i = 0; i < document.querySelectorAll(".operator").length; i++) {             //adding event listners as click for operators
  document.querySelectorAll(".operator")[i].addEventListener("click", function() {
    appendOperator(this.innerText);
  });
}       
document.querySelector(".backspace").addEventListener("click", function() {       //adding event listner  as click for backspace
 deleteLeft();
});
document.querySelector(".AC").addEventListener("click", function() {            //adding event listner as click for AC
  clearResult();
});
document.querySelector(".equal").addEventListener("click", function() {       //adding event listner as click for equal to calculate result 
 calculateResult();
});


document.addEventListener('keydown', function (event) {             //adding event listners for both operators and operands for keyboard functionality
  const key = event.key;
  const validKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '.', 'Enter', 'Backspace', '%', 'c'   //C in keyboard functions as AC when clicked
  ];

  if (validKeys.includes(key)) {
    event.preventDefault();

    if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      deleteLeft()
    } else if (key === 'c') {
      clearResult();
    } else {
      appendValue(key);
    }
  }
});
