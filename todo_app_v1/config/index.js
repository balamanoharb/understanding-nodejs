var configValues = require('./config');

module.exports = {
  dbConnectionString: function () {
    return `mongodb://localhost:27017/todo`
  }
}