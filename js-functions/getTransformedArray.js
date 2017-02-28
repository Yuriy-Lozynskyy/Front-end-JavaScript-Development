function getTransformedArray(arr, func) {
    var newArr = [];
    forEach(arr, function(num) { newArr.push(func(num)) });

    return newArr;
};

//example:
function increment(num){ return num + 1 }
getTransformedArray([1, 7, 20], increment);