const removeFromArray = function(arr) {
    const ans = [] ; 
    let numbers = arguments.length-1 ; 
    for (let i of arr) {
        let flag = 0 ;
        for (let j=1 ; j<=numbers ; j++) {
            if (i == arguments[j]) 
                flag = 1; 
        }
        if (flag == 1) 
            continue ; 
        else 
            ans.push(i) ; 
    }
    return ans ; 
};

// Do not edit below this line
module.exports = removeFromArray;

/*
    [1,2,3,4,5,6,7,8,9,10], 3 4 5 6 7
     numbers = 5 arguments 

     i=1 flag = 0 ans => [1]
     i=2 flag = 0 ans => [1,2]
     i=3 flag = 0  - 
     ...
     ...
     i=8 flag = 0 ans => [1,2,8]


*/
