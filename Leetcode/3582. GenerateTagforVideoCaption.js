// input = "can I go There";
input = " fPysaRtLQLiMKVvRhMkkDLNedQKffPnCjbITBTOVhoVjiKbfSawvpisDaNzXJctQkn";


var generateTag = function (caption) {
   let final = [];
   result = caption.trim().toLowerCase().split(' ');
   final.push(result[0].toLowerCase())
   for (let i = 1; i < result.length; i++) {
      final.push(result[i].charAt(0).toUpperCase()+result[i].slice(1))
   }
   final.unshift("#")

   return final.join('').slice(0,99);
};

console.log(generateTag(input));