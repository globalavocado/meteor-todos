/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Todos } from './todos.js'

if (Meteor.isServer) {
	describe('Todos', () => {
		describe('methods', () => {
			const userId = Random.id();
			let todoId;

			beforeEach(() => {
				Todos.remove({});
				todoId = Todos.insert({
					name: 'test task',
					createdAt: new Date(),
					owner: userId,
					username: 'kevin',
				});
			});

			it('can delete owned task', () => {
				// find the internal implementation of the task method so
				// we can test it in isolation
				const deleteTodo = Meteor.server.method_handlers['todos.remove'];
				// set up a fake method invocation that looks like what the method expects
				const invocation = { userId };

				// run the method with 'this' set to the fake invocation
				deleteTodo.apply(invocation, [todoId]);

				// verify that the method does what we expected
				assert.equal(Todos.find().count(), 0);
			});
			
		});
	});
}