import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import UndoRedo from './UndoRedo';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default App;
