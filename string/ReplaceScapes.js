input = "I love web development";

function RemoveSpaces(str){
    let updated = str.replaceAll(" ","-");
    console.log("Updated : ",updated);
}

RemoveSpaces(input);