const reverseString = function(input) {

    if(!input){
        return "";
    }

    let arr = [];
    for(let i=0;i<input.length;i++){
        arr[i] = input[i];
    }

    let finalStr = "";

    for(let i = arr.length -1;i>=0;i--){
        finalStr += arr[i];
    }

    return finalStr;

};

// Do not edit below this line
module.exports = reverseString;
