import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
