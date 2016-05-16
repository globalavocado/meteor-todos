import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Todos } from '../api/todos.js';

import './todo.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('todos');
});

Template.body.helpers({
  todos() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      //if hide completed is checked, filter tasks
      return Todos.find({ checked: { $ne: true } }, { sort: {createdAt: -1 } });
    }
    //otherwise return all of the tasks
    return Todos.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Todos.find({ checked: { $ne: true } }).count();
  },
  currentUserName() {
    return Meteor.user().username;
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
    Meteor.call('todos.insert', name);

    // clear form
    target.name.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});