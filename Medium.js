const readLine = require('readLine').createInterface({
    input: process.stdin,
    output:process.stdout
});

readLine.question('Can you say somethng?', sentence => {
    if(sentence === sentence.toUpperCase()){
        console.log("Why are you yelling..")
    }else if(sentence === sentence.toLowerCase()){
        console.log("Please speak up, dont whisper.")
    }else{
        console.log("Thank you for talking normally.") 
    }
    line.toLocaleLowerCase();
})

