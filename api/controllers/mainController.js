'use-strict';

var mongoose = require('mongoose');
var Tasks = mongoose.model('Tasks');

exports.listAllTasks = function(req, res) {
	Tasks.find({}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.createTask = function(req, res) {
	var new_task = new Tasks(req.body);
	new_task.save(function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.getTaskById = function(req, res) {
	Tasks.findById(req.params.taskId, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.updateTask = function(req, res) {
	Tasks.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.deleteTask = function(req, res) {
	Tasks.remove({ _id: req.params.taskId }, function(err, task) {
		if (err)
			res.send(err);
		res.json({ message: 'Task successfully deleted' });
	});
};