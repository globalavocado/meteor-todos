import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Todo extends Component {
  render() {
    return (
      <li>{this.props.todo.name}</li>
      );
  }
}

Todo.propTypes = {
  // This component gets the task to display through a React prop.
  // we can use propTypes to indicate it is required
  todo: PropTypes.object.isRequired,
};