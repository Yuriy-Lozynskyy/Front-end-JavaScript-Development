function getClosestToZero() {
    var closest = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (Math.abs(closest) > Math.abs(arguments[i + 1])) {
            if (arguments[i + 1] !== 0) {
                closest = arguments[i + 1];
            }
        }
    }
    return closest;
};

getClosestToZero(-5, 10, -1, 3, 0, -4, -6, 15, -7);
