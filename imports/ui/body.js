import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  todos: [
    { name: 'Learn Javascript' },
    { name: 'Learn MeteorJS' },
    { name: 'Create a Todo' },
  ],
});