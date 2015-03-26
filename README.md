<h1>to-do list in MeteorJS</h1>

following <a href="https://www.meteor.com/try">this</a> and <a href="https://semaphoreci.com/blog/2014/11/19/meteorjs-getting-started.html">this</a> tutorial.


Before adding the input field in the first tutorial, manually insert tasks into MongoDB like this:

~~~~
	...=# meteor mongo
	...=# db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
	...=# exit
~~~~

<h3>TDD</h3>
- Velocity test runner (with html reporter) 
- unit & integration testing: Jasmine