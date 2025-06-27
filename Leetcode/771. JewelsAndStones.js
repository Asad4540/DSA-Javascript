
let stones = "aAAbbbb";
let jewels = "aA";

var numJewelsInStones = function (jewels, stones) {
    let counter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones.charAt(i))) {
            counter++;
        }
    }
    return counter;
}

console.log(numJewelsInStones(jewels, stones));

// var numJewelsInStones = function(jewels, stones) {
//     let counter = 0;
//     for(i=0;i<stones.length;i++){
//         let temp = stones[i];
//         for(let j=0;j<jewels.length;j++){
//             if(temp == jewels[j]){
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }