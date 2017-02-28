Function.prototype.bindMe = function() {
    var func = this,
        arg = Array.prototype.slice.call(arguments),
        object = arg.shift();
    return function() {
        return func.apply(object,
            arg.concat(Array.prototype.slice.call(arguments)));
    };
};
