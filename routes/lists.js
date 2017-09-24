var express = require('express');
var router = express.Router();
var getList = require('../lib/list').getList;
var createItem = require('../lib/list').createItem;
var updateItem = require('../lib/list').updateItem;

router.get('/', function(req, res) {
  getList(function(err, list) {
    if (err) return res.sendStatus(404);

    res.render('list', {list});
  });
});

router.post('/', function(req, res) {
  var item = JSON.parse(req.body.item);

  createItem(item, function(err, savedItem) {
    if (err) return res.sendStatus(500);

    res.status(200).send(savedItem);
  });
});

router.put('/', function(req, res) {
  var item = JSON.parse(req.body.item);

  updateItem(item, function(err, updatedItem) {
    if (err) return res.sendStatus(500);

    res.status(200).send(updatedItem);
  });
});

module.exports = router;
