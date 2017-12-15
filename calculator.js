// JavaScript Document

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial_button() {
	e();
	d(factorial(document.getElementById("d").value));
}

//change Display

function d(val) {
	document.getElementById("d").value = val;
}

//Type Numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}
//Evaluate the equation 
function e() {
	try {
		d(eval(document.getElementById("d").value));
}
	catch(err) {
		d("Error");
	}
}


//Christmas
function christmas() {
	
	
}