import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import Container from './components/Container';
import { TodoItemsCtx } from './store/todo-items-store';
import Welcome  from './components/Welcome';
import Counter from './components/Counter';

function App() {
  let context = useContext(TodoItemsCtx);
  let [item, setItem] = useState([]);
  function shareItem(itemName) {
    setItem((oldItem) => {
      return [...oldItem, itemName];
    })
  }
  function deleteTodo(itemName) {
    const list = item.filter((todo) => todo !== itemName);
    setItem(list);
  }

  return (
    <Container>
      <TodoItemsCtx.Provider value={
        {
          item: item,
          addNewItem: shareItem,
          deleteItem: deleteTodo
      }}>
        <Welcome></Welcome>
        <AppName />
        <AddTodo />
        <TodoItem />
        <Counter/>
      </TodoItemsCtx.Provider>

    </Container>
  )
}

export default App
