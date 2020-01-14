var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var empty = "";
while (empty.length < 6){
    empty+= alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(empty);    
}

