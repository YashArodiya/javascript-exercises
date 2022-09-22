const repeatString = function(str, num) {
    let ans = "" ; 
    if (num < 0) return "ERROR" ; 
    if (str == "") return ans ; 
    for (let i=1; i<=num ; i++) 
        ans += str ; 
    return ans ; 
};

// Do not edit below this line
module.exports = repeatString;

