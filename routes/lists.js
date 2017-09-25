const express = require('express');
const router = express.Router();
const getList = require('../lib/list').getList;
const createItem = require('../lib/list').createItem;
const updateItem = require('../lib/list').updateItem;

router.get('/', function(req, res) {
  getList(function(err, list) {
    if (err) return res.sendStatus(404);

    res.status(200).send(list);
  });
});

router.post('/', function(req, res) {
  var item = req.body.item;

  createItem(item, function(err, savedItem) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    res.status(200).send(savedItem);
  });
});

router.put('/', function(req, res) {
  var item = JSON.parse(req.body.item);

  updateItem(item, function(err, updatedItem) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }

    res.status(200).send(updatedItem);
  });
});

module.exports = router;
