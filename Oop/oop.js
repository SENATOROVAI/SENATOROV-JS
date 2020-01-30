let speak = function () {
    console.log(this.sound + " my name " + this.name);
}
let cat = {
    sound: "mya",
    name: "lol",
    speak:speak
};
cat.speak();


/*
let dog = {
    name: "olady",
    legs: 4,
    isAwesome:true
};
//add new value
//dog.name = 4;


dog.bark = function () {
    console.log("gav-gav my name:" + this.name);
};
dog.bark();
*/