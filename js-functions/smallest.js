function smallest() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            continue;
        } else if (typeof arguments[i] === 'number') {
            arr.push(arguments[i]);
        } else {
            continue;
        };
    };
    return Math.min(...arr);
};

module.exports = smallest;
