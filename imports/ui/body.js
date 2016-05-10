import { Template } from 'meteor/templating';

import { Todos } from '../api/todos.js';

import './body.html';

Template.body.helpers({
  todos() {
  	return Todos.find({});
  },
});