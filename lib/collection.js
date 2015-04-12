(function() {

    "use strict";

    var generatorify = require("nodefunc-generatorify");
    var Cursor = require("./cursor");

    var Collection = function(collection) {
        this.underlying = collection;
    };

    Collection.prototype.count = function*(query) {
        var fn = generatorify(this.underlying.count);
        return yield* fn.apply(this.underlying, [query]);
    };


    Collection.prototype.createIndex = function*() {
        //pass
    };


    Collection.prototype.deleteOne = function*(query) {
        var fn = generatorify(this.underlying.remove);
        return yield* fn.apply(this.underlying, [query, { multi: false }]);
    };


    Collection.prototype.deleteMany = function*(query) {
        var fn = generatorify(this.underlying.remove);
        return yield* fn.apply(this.underlying, [query, { multi: true }]);
    };


    Collection.prototype.drop = function*() {
        var fn = generatorify(this.underlying.remove);
        return yield* fn.apply(this.underlying, [{}, { multi: true }]);
    };


    Collection.prototype.dropIndex = function*() {
        //pass
    };


    Collection.prototype.find = function*(query) {
        var cursor = this.underlying.find(query);
        return new Cursor(cursor);
    };


    Collection.prototype.findOne = function*(query) {
        var fn = generatorify(this.underlying.findOne);
        return yield* fn.apply(this.underlying, [query]);
    };


    Collection.prototype.insertOne = function*(doc) {
        var fn = generatorify(this.underlying.insert);
        var result = yield* fn.apply(this.underlying, [doc]);
        return { insertedId: result._id };
    };


    Collection.prototype.insertMany = function*(docs, options) {
        var fn = generatorify(this.underlying.insert);
        return yield* fn.apply(this.underlying, [docs]);
    };


    Collection.prototype.updateOne = function*(query, update) {
        var options = { multi: false };
        var fn = generatorify(this.underlying.update);
        return yield* fn.apply(this.underlying, [query, update, options]);
    };


    Collection.prototype.updateMany = function*(query, update) {
        var options = { multi: true };
        var fn = generatorify(this.underlying.update);
        return yield* fn.apply(this.underlying, [query, update, options]);
    };


    module.exports = Collection;

}).call(this);
