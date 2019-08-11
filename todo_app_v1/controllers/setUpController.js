var Todos = require("../models/todoModel");

module.exports = function (app) {
  app.get('/api/setupTodos', function (req, res) {
    // seed database
    var starter = [
      {
        username: 'test',
        todo: 'Buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'Bala',
        todo: 'Buy Choco',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'Bala',
        todo: 'Complete nodejs tuts',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starter, function (err, results) {
      res.send(results);
    })
  })
}