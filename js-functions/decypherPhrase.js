function decypherPhrase(obj, str) {
    var revObj = {};
    for (var key in obj) {
        revObj[obj[key]] = key;
    }
    var result = cypherPhrase(revObj, str);

    return result;
}

//example:
var charactersMap = { a: 'o', c: 'd', t: 'g' }
decypherPhrase(charactersMap, 'kiggy dog'); // -> “kitty cat”
