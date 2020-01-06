var randomeBodyParts = ["eye", "nose", "skull"];
var randomeAdjectives = ["stupid", "idiotic"];
var randomeWords = ["mouse"];
//Выбор случайной части тела из массива randomeBodyRarts
var randomeBodyPart = randomeBodyParts[Math.floor(Math.random() * randomeBodyParts.length)];
//Выбор прилагательного randomeAdjectives
var randomeAdjective = randomeAdjectives[Math.floor(Math.random() * randomeAdjectives.length)];
//Выбор слова randomeWords
var randomeWord = randomeWords[Math.floor(Math.random() * randomeWords.length)];
//Соединяем случайные строчки в предложение 

var randomInsult = ["У тебя", randomeBodyPart, "словно", 
randomeAdjectives, randomeWord + "!!!"].join(" ");

randomInsult;

/*randomWords.length как множителя означает,
что нам не понадобится менять этот код, если длина массива изменится.*/