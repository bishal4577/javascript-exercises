const removeFromArray = function(arr, ...args) {

    if(!args) return arr;

    // return arr.filter((arg) => if());
    
    let finalArr = [];

    for(let i=0;i<arr.length;i++){
        if(args.includes(arr[i])){
        continue;
        }
        finalArr.push(arr[i]);
    }

    // return arr.filter(item => !args.includes(item));

    return finalArr;


};

// Do not edit below this line
module.exports = removeFromArray;
