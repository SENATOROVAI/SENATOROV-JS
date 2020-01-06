var randomeBodyParts = ["eye", "nose", "skull"];
var randomeAdjectives = ["stupid", "idiotic"];
var randomeWords = ["mouse"];
//Выбор случайной части тела из массива randomeBodyRarts
var randomeBodyPart = randomeBodyParts[Math.floor(Math.random() * 3)];
//Выбор прилагательного randomeAdjectives
var randomeAdjective = randomeAdjectives[Math.floor(Math.random() * 2)];
//Выбор слова randomeWords
var randomeWord = randomeWords[Math.floor(Math.random() * 1)];
//Соединяем случайные строчки в предложение 
var randomInsult = "У тебя " + randomeBodyPart + " словно " + randomeAdjective + " " + randomeWord + "!!!";
randomInsult;
