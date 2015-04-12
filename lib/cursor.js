(function() {

    "use strict";

    var generatorify = require("nodefunc-generatorify");

    var Cursor = function(cursor) {
        this.underlying = cursor;
    };

    var syncMethods = [
        "limit",
        "skip",
        "sort"
    ];
    syncMethods.forEach(function(methodName) {
        Cursor.prototype[methodName] = function() {
            var cursor = this.underlying[methodName].apply(this.underlying, arguments);
            return new Cursor(cursor);
        };
    });


    Cursor.prototype.toArray = function*() {
        var fn = generatorify(this.underlying.exec);
        return yield* fn.apply(this.underlying, arguments);
    };


    module.exports = Cursor;

}).call(this);
