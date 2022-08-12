function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const results = document.querySelector('result');

function calc()
{
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  var calculate = weight / (height * height);

  if (calculate > 35)
  {
    var results = document.getElementById('result').value = "Your BMI is " + calculate.toFixed(1) +". You are extremely obese!";
  }
  else if (calculate > 30)
  {
    var results = document.getElementById('result').value = "Your BMI is " + calculate.toFixed(1) +". You are obese!";
  }
  else if (calculate > 25)
  {
    var results = document.getElementById('result').value = "Your BMI is " + calculate.toFixed(1) +". You are overweight!";
  }
  else if (calculate > 18.5)
  {
    var results = document.getElementById('result').value = "Your BMI is " + calculate.toFixed(1) +". You are normal!";
  }
  else
  {
    var results = document.getElementById('result').value = "Your BMI is " + calculate.toFixed(1) +". You are underweight!";
  }
  
}
