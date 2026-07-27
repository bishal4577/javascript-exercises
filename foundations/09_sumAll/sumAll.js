function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
    }

function swap(num1,num2){
    let temp = num1;
    num1 = num2;
    num2 =temp;
}




const sumAll = function(start,end) {
    
    let sum =0;

    if(isPositiveInteger(start) && isPositiveInteger(end)){
        if(start > end){
            swap(start,end);
            for(let i = end;i<=start;i++){
                sum += i;
            }
        }else{
            for(let i = start;i<=end;i++){
                sum += i;
            }        
        }
        
    }else{
        return "ERROR";
    }

return sum;

};

// Do not edit below this line
module.exports = sumAll;
