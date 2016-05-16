import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos');

if (Meteor.isServer) {
  // this code only runs on the server
  // only publish tasks that are public or belong to the current user
  Meteor.publish('todos', function todosPublication() {
    return Todos.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'todos.insert'(name) {
    check(name, String);

    // make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
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

    const todo = Todos.findOne(todoId);
    if (todo.private && todo.owner !== this.userId) {
      //if the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Todos.remove(todoId);
  },
  'todos.setChecked'(todoId, setChecked) {
    check(todoId, String);
    check(setChecked, Boolean);

    const todo = Todos.findOne(todoId);
    if (todo.private && todo.owner !== this.userId) {
      // if the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Todos.update(todoId, { $set: { checked: setChecked } });
  },
  'todos.setPrivate'(todoId, setToPrivate) {
    check(todoId, String);
    check(setToPrivate, Boolean);

    const todo = Todos.findOne(todoId);

    // make sure only the task owner can make a task private
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Todos.update(todoId, { $set: { private: setToPrivate } });
  },
});