function cypherPhrase(obj, str) {
    var arr = getTransformedArray(str, function(el) {return el });
    var keys = Object.keys(obj);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            if (arr[i] === keys[j]) {
                arr[i] = obj[keys[j]];
            }
        }
    }
    return arr.join('');
}

//example:
var charactersMap = { a: 'o', c: 'd', t: 'g' };
cypherPhrase(charactersMap, 'kitty cat');
