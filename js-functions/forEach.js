function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        var result = func(arr[i]);
    };
    return result;
};

//example:
forEach([3, 5, 2], function(el) { console.log(el) })
