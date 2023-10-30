// reverse the string 
const originalString = 'Hello, World!';
function reverseString(str){
    var newStr="";
    for(var i=str.length-1;i>=0;i--){
        newStr+=str[i];

    }
    return newStr;
}

const reversedString = reverseString(originalString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"