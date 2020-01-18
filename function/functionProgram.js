let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " SLOVNO " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
randomString;
