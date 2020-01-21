let counter = 60;
function printMessage() {
    alert("До выключение компа осталось " + counter + " сек");
    counter--;
};
let repeat = setInterval(printMessage, 1000);

