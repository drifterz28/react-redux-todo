import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import * as c from '../constants';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case c.SHOW_ALL:
      return todos;
    case c.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case c.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

export default connect(
  state => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
  }),
  {
    onTodoClick: toggleTodo
  }
)(TodoList);
