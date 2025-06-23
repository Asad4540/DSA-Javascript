num1 = "456";
num2 = "77";

function Addstrings(num1, num2) {
   result = BigInt(num1)+BigInt(num2);
   return result.toString();
}


console.log(Addstrings(num1,num2));