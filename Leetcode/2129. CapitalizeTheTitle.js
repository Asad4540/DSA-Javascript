let input = "capiTalIze tHe titLe";

function CapitalizeTitle(str) {
    let temp = str.split(' ');
    result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length <= 2) {
            result.push(temp[i].toLowerCase());
        }
        else {
            result.push(`${temp[i].charAt(0).toUpperCase()}${temp[i].slice(1).toLowerCase()}`)
        }

    }
    return result.join(' ');
}

console.log(CapitalizeTitle(input));



