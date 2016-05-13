import { Template } from 'meteor/templating';

import { Todos } from '../api/todos.js';

import './body.html';

Template.body.helpers({
  todos() {
  	//show nearest tasks at the top
  	return Todos.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
	'submit .new-task'(event) {
		// prevent default browser form submit
		event.preventDefault();

		// get value from form element
		const target = event.target;
		const name = target.name.value;

		// insert a task into the collection
		Todos.insert({
			name,
			createdAt: new Date(), // current time
		});

		// clear form
		target.name.value = '';
	},
});