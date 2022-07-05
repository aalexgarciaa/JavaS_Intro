var sentence = window.prompt("Please say something:");

    if(sentence === sentence.toUpperCase()){
        console.log("Why are you yelling..")
    }else if(sentence === sentence.toLowerCase()){
        console.log("Please speak up, dont whisper.")
    }else{
        console.log("Thank you for talking normally.") 
    }