//MEDIUM
var sentence = window.prompt("Please say something:");

    if(sentence === sentence.toUpperCase()){
        console.log("Why are you yelling..")
    }else if(sentence === sentence.toLowerCase()){
        console.log("Please speak up, dont whisper.")
    }else{
        console.log("Thank you for talking normally.") 
    }

//VERY HARD
var num1 = window.prompt("Enter a number:");
var operation = window.prompt("Enter an operation:");
var num2 = window.prompt("Enter a second number:");

if(operation === "+"){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
}else if (operation === "-"){
    console.log(`${num1} - ${num2} = ${num1-num2}`);
}else if (operation === "*"){
    console.log(`${num1} * ${num2} = ${num1*num2}`);
}else{
    console.log(`${num1} / ${num2} = ${num1/num2}`);
}