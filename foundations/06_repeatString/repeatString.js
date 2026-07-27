const repeatString = function(string, num) {
    if(num<0) return "ERROR";

    let arr = [];
    for(let i=0;i<num;i++){
        arr[i] = string;
    }

    let finalString = "";
    for( i of arr){
        finalString += i;
    }

return finalString;

};

// Do not edit below this line
module.exports = repeatString;
