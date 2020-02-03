let input = "javascript is awesome";
let output = "";
for (let i = 0; i < input.length; i++){
    if (input[i]==="a"){
    output+="4";}
    else if (input[i]==="s"){
    output+="$";
    }else if(input[i]==="o"){
        output+="0";
    } else {
        output+=input[i];
    }
}
console.log(output);




