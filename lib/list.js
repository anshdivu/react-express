var fs = require('fs');
var Guid = require('guid');

const getList = function(callback) {
  fs.readFile('./data/list.json', 'utf8', function(err, data) {
    var list;
    if (!err) {
      list = JSON.parse(data);
    }
    callback(err, list);
  });
};

const createItem = function(item, callback) {
  getList(function(err, list) {
    if (err) return callback(err);

    item.id = Guid.raw();
    list.items.push(item);

    saveList(list, function(err) {
      callback(err, item);
    });
  });
}

const updateItem = function(item, callback) {
  getList(function(err, list) {
    if (err) return callback(err);
    var itemIndex = getItemIndex(item.id, list);

    list.items[itemIndex] = Object.assign(list.items[itemIndex], item);

    saveList(list, function(err) {
      callback(err, list.items[itemIndex]);
    });
  });
}

const saveList = function(list, callback) {
  fs.writeFile('./data/list.json', JSON.stringify(list), {flag: 'w+'}, callback);
}

const getItemIndex = function(id, list) {
  return list.items.findIndex(function(item) {
    return item.id === id;
  });
}

module.exports = {
  createItem,
  getList,
  updateItem
};
