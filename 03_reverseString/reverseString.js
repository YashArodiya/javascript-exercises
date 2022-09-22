const reverseString = function(normal) {
    let ans = "" ; 
    let len = normal.length ; 

    if (normal == "") return ans ; 
    for (let i = len-1 ; i>=0 ; i--) {
        ans += normal[i] ; 
    }
    return ans ; 
};

// Do not edit below this line
module.exports = reverseString;
