import * as c from '../constants';

let nextTodoId = 0;
export const addTodo = text => ({
  type: c.ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: c.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: c.TOGGLE_TODO,
  id
});
