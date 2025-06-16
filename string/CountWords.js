input = "Hello World";

function WordsCounter(str) {
    let counter = 1;
    if (str.length <= 0) {
        console.log("It is empty or 0");
    }
    else {
        for (let char of str) {
            if(char == " "){
                counter++;
            }
        }
        console.log(counter);
    }
}

WordsCounter(input);

