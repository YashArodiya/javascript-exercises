const sumAll = function(num1 , num2) {
    let sum = 0 ; 
    let startingvalue=0 ;
    let finishingvalue=0 ; 
   
    if (num1<num2) 
        {
            startingValue = num1 ; 
            finishingvalue = num2 ; 
        }
    else 
        {
            startingValue = num2 ; 
            finishingvalue = num1 ; 
        }
    for (let i=startingvalue ; i<=finishingvalue ; i++) {
        sum += i ; 
    }
    if (num1<0 || num2<0 ) return 'ERROR' ;
    if (typeof(num2) == Object) return sum ; 
    if (typeof (num2) != Object) return 'ERROR' ; 
    return sum ; 
};

// Do not edit below this line
module.exports = sumAll;
