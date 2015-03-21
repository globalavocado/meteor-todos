<h1>to-do list in MeteorJS</h1>

following <a href="https://www.meteor.com/try">this</a> tutorial.


When storing tasks as a MongoDB collection, insert tasks from the console like this:
~~~~
	...=# meteor mongo
	...=# db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
	...=# exit
~~~~