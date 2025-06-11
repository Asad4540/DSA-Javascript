let input = "abc12";

function lChecker(str){
    for(let i=0;i<str.length;i++){
        if(str[i]>=0 && str[i]<9){
            console.log("false");
            return;
        }
    }
    console.log("true");
}

// -------------------------------------------------------------------

let numbers = [1,2,3,4,5,6,7,8,9,0];
function letterChecker(str){
    temp = "";
    counter = 0;
    for(let i=0;i<str.length;i++){
        temp = str[i];
        for(let j=0;j<numbers.length-1;j++){
            if(temp == numbers[j]){
                counter++;
            }
        }
    }
    if(counter>0){
        console.log("false");
    }    
    else{
        console.log("true");
    }
}

lChecker(input);
letterChecker(input);