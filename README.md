# to-do list in MeteorJS

*This branch is for Meteor 1.3 with React, check out the other branch for Meteor 1.2 to see how things were done the old way.*

following [this](https://www.meteor.com/tutorials/react/creating-an-app) tutorial and adding [bootstrap with LESS](http://www.manuel-schoebel.com/blog/meteorjs-and-twitter-bootstrap---the-right-way)

## TDD
- mocha 

Meteor now has more integrated testing functionality with mocha (which needs to be installed as a module). See [here](https://www.meteor.com/tutorials/blaze/testing) for more info.

## database

If you need to manually insert tasks into MongoDB:

~~~~
	...=# meteor mongo
	...=# db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
	...=# exit
~~~~