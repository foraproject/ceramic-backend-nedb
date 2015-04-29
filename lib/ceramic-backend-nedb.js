(function() {

    "use strict";

    var NeDBClient = require('./client');
    
    var ObjectID = function(id) { return id; };

    module.exports = {
        ObjectID: ObjectID,
        NeDBClient: NeDBClient
    };

}).call(this);
