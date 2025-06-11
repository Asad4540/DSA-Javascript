let input = "abc1";
let number = [1,2,3,4,5,6,7,8,9,0];


function letterChecker(str){
    for(let i=0;i<str.length;i++){
        if(input[i]== number[i]){
            console.log("false");
        }
        else{
            console.log("true");
        }
    }
    
}

letterChecker(input);