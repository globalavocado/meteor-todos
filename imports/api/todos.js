import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos');

Meteor.methods({
  'todos.insert'(name) {
    check(name, String);

    // make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorised');
    }

    Todos.insert({
      name,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'todos.remove'(todoId) {
    check(todoId, String);

    Todos.remove(todoId);
  },
  'todos.setChecked'(todoId, setChecked) {
    check(todoId, String);
    check(setChecked, Boolean);

    Todos.update(todoId, { $set: { checked: setChecked } });
  },
});