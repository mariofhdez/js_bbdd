var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var segundo = (new Date()).getSeconds();

  res.render('index', {
    title: 'Express',
    parrafo: '<p> inyectado </p>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [{name: 'María'}, {name: 'Alejandra'}, {name: 'Laura'}]
  });
});

module.exports = router;
