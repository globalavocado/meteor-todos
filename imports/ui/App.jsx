import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Todos } from '../api/todos.js';

import Todo from './Todo.jsx';

// App component - represents the whole App
class App extends Component {
  renderTodos() {
    return this.props.todos.map(
        (todo) => (
          <Todo key={todo._id} todo={todo} />
          )
        );  
  }

render() {
  return (
    <div className="container">
      <header>
        <h1>Meteor Todos</h1>
      </header>

      <ul>
        {this.renderTodos()}
      </ul>
    </div>
    );
  }

}

App.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    todos: Todos.find({}).fetch(),
  };
}, App);