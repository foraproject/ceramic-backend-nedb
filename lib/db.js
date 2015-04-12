(function() {

    "use strict";

    var DataStore = require("nedb");
    var Collection = require("./collection");

    var Db = function() {
        this.collections = {};
    };

    Db.prototype.dropDatabase = function*() {
        this.collections = {};
    };

    Db.prototype.close = function*() {
    };

    Db.prototype.collection = function*(name) {
        if (!this.collections[name]) {
            var ds = new DataStore();
            this.collections[name] = new Collection(ds);
        }
        return this.collections[name];
    };

    Db.prototype.ObjectID = function(id) { return id; };

    module.exports = Db;

}).call(this);
