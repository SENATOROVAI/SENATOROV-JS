var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6 ){
    randomString+=alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomString);
};

