(function() {

    "use strict";

    var Db = require("./db");

    var NeDBClient = function() {
    };

    NeDBClient.connect = function*() {
        return new Db();
    };

    module.exports = NeDBClient;

}).call(this);
