import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import ListItem from './components/ListItem/ListItem';
import Example from './components/Typography/Typography';

const App = () => {
  const [item, setItem] = useState([]);

  const handleDeleteItem = deletedItem => {
    const index = item.findIndex(x => x.id === deletedItem.id)
    const newItemList = [...item];
    newItemList.splice(index, 1);
    setItem(newItemList);
  }

  const handleAddItem = value => {
    const newItem = {
      id: item.length + 1,
      text: value,
    };
    const newItemList = [...item];
    newItemList.push(newItem);
    setItem(newItemList);
  };


  return (
    <div className='App'>
      <Example />
      <TodoForm onSubmit={handleAddItem} />
      <ListItem items={item} onClick={handleDeleteItem} />
    </div>
  );
}

export default App;
