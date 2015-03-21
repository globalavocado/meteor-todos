<h1>to-do list in MeteorJS</h1>

following <a href="https://www.meteor.com/try">this</a> and <a href="https://semaphoreci.com/blog/2014/11/19/meteorjs-getting-started.html">this</a> tutorial.


When storing tasks as a MongoDB collection, insert tasks from the console like this:
~~~~
	...=# meteor mongo
	...=# db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
	...=# exit
~~~~

<h3>TDD</h3>
- Velocity test runner (with html reporter) 
- unit & integration testing: Jasmine