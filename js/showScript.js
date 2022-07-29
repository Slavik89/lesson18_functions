var button = document.getElementById("clickme"),
  count = 0;

function countDigit() {
    count += 1;
    console.log(count);
    showMessage();
}

button.onclick = countDigit;


var button2 = document.getElementById("clickme2");

function showMessage() {
  console.log("Hello JavaScript!"); // локальная переменная

}

button2.onclick = showMessage;

// showMessage(); // Привет, я JavaScript!

// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

