var button2 = document.getElementById("clickme2");

function showMessage2() {
  showParam(1);
}

function showParam(param1) {
    console.log(param1);
}

button2.onclick = showMessage2;