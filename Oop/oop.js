let dog = {
    name: "olady",
    legs: 4,
    isAwesome:true
};
//add new value
dog.name = 4;


dog.bark = function () {
    console.log("gav-gav my name:" + this.name);
};
dog.bark();
