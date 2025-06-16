input = "hello world";
input2 = "bcde";

function UniqueLetters(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        let temp = str[i];
        for (let j = 0; j < i; j++) {
            if (temp == str[j]) {
                counter++;
            }
        }
    }
    if (counter <= 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

UniqueLetters(input);
UniqueLetters(input2);
