input = "hello world";
vowels = ["a", "e", "i", "o", "u"];
counter = 0;

function vowelschecker(str) {

    for (let i = 0; i < str.length; i++) {
        let temp = str[i];

        for (let j = 0; j < vowels.length; j++) {
            if (temp === vowels[j]) {
                counter++;
                break;
            }

        }
    }
    console.log(counter);
}

vowelschecker(input);