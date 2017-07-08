'use-strict';

module.exports = function(app) {
	var todoList = require('../controllers/mainController');

	app.route('/tasks')
		.get(todoList.listAllTasks)
		.post(todoList.createTask);

	app.route('/tasks/:tasksId')
		.get(todoList.getTaskById)
		.put(todoList.updateTask)
		.delete(todoList.deleteTask)
};
