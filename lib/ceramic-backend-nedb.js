(function() {

    "use strict";

    var NeDBClient = require('./client');
    var Mongo = require('mongodb');

    var ObjectID = function(id) { return id; };

    module.exports = {
        ObjectID: ObjectID,
        NeDBClient: NeDBClient
    };

}).call(this);
