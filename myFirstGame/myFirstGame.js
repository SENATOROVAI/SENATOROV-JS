//создаём массив со словами
let words = [
    "toque",
    "lion",
    "cat",
    "fish"
];
// выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];
// создаём итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
let remaingLetters = word.length;
// игровой цикл
while (remaingLetters > 0) {
    // показываем состояние игры
    alert(answerArray.join(" "));
// запрашиваем вариант ответа
let guess = prompt("Угадайте букву");
if (guess === null) {
    //выходи из игрового цикла
 break;
} else if (guess.length !==1) {
    alert("Пожалуйста, введите только одну букву.");
} else {
    // обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remaingLetters--;
        }
        }
    }

}
            // конец игрового цикла
            alert(answerArray.join(" "));
            //поздравляем игрока
            alert("Coll guys " + word);
            