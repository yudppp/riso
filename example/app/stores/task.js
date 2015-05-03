var Schema = require('../../../lib/schema');

module.exports = Task;

var Task = new Schema({
  text: String,
  level: String,
  finished: Boolean
})

Task.schema.path('level').validate(function (value) {
  return /debug|info|error/i.test(value);
}, 'Invalid level');
