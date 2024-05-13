"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

//recuperar lista de agentes 
/*
router.get('/', function(req, res, next){
    Agente.find().then((list) => {
        res.json({ok: true, list: list});
    }).catch((err) => {
            next(err);
    })
});
*/

//consulta con filtros

router.get('/', function(req, res, next){
    var name = req.query.name;
    var age = req.query.age;

    var limit = parseInt(req.query.limit) || null;
    var skip = parseInt(req.query.skip) || null;
    var fields = req.query.fields || null;
    var sort = req.query.sort || null;

    var filter = {};

    if(name){
        filter.name = name;
    };

    if(typeof(age) !== 'undefined'){
        filter.age = age;
    };

    Agente.list(filter, limit, skip, fields, sort).then((list) => {
        res.json({ok: true, list: list});
    }).catch((err) => {
            next(err);
    })
});

//crear agente
router.post('/', function(req, res, next) {
    var agente = new Agente(req.body);

    agente.save().then((agenteGuardado) => {
        res.json({ok: true, agente: agenteGuardado});
    }).catch((err) => {
        next(err);
    });
});

//actualizar agente
router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Agente.updateOne({_id: id}, req.body).then((agente) => {
        res.json({ok: true, agente: agente})
    }).catch((err) => {
        next(err);
    });
});

//eliminar agente
router.delete('/:id', function(req, res, next){
    var id = req.params.id;

    Agente.deleteOne({_id: id}).then((result) => {
        res.json({ok: true, resultado: result});
    }).catch((err) => {
        next(err);
    })
})

module.exports = router;