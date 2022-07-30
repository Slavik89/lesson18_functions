var button3 = document.getElementById("clickme3");

function showMessage3() {
  console.log(showParam2(9));
}

function showParam2(param1) {
   return param1*3;
}

button3.onclick = showMessage3;