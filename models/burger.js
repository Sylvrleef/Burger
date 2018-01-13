const orm = require("../config/orm.js");

var connection = require("../config/connection.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
