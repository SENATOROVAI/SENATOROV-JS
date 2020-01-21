let counter = 1;
function printMessage() {
    console.log("Сколько лямов я заработал" + counter + " сек");
    counter++;
};
let repeat = setInterval(printMessage, 1000);

