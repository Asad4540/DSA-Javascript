let input = "hello";
let no = 3;

function StringRepeat(str, n) {
    result="";
    for (i = 0; i < n; i++) {
       result += " "+str; 
    }
    console.log(result);
}

StringRepeat(input,no);