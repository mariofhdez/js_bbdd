"use strict";

var mongoose = require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

agenteSchema.statics.list = function(filter, limit, skip, fields, sort){
    var query = Agente.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    return query;
}

var Agente = mongoose.model('Agente', agenteSchema);