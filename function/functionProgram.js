var generateRandomInsult = function () {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    
    var pickRandomWord = function (words) {
        return words[Math.floor(Math.random() * words.length)];
        };
        
    var randomString = "У тебя " + pickRandomWord(randomBodyParts) + 
    " словно " + pickRandomWord(randomAdjectives) + 
    " " + pickRandomWord(randomWords) + "!!!";
     return randomString;
    };
    generateRandomInsult();