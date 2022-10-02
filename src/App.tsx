import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemInterface from './Store/Type/ItemInterface';
import {Paper, List, Container} from "@mui/material"
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';

function App() {
  
  const [items, setItems] = useState<ItemInterface[]>([]);

  const addItem = (item : ItemInterface) => {
    item.id = "ID-" + items.length;
    item.done = false
    setItems([...items, item]);
    console.log("items : ", items);
  }

  const deleteItem = (item : ItemInterface) => {
    const newItems = items.filter(e => e.id !== item.id);
    setItems([...newItems]);
  }

  const editItem = () =>{
    setItems([...items])
  }

  let todoItems = items.length > 0 && (
    <Paper style={{margin : 16}}>
        <List>
          {items.map((item) => (
            <Todo item = {item} key = {item.id} editItem={editItem} deleteItem={deleteItem}></Todo>
          ))}
        </List>
    </Paper>
  )

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">{todoItems}</div>  
      </Container>
    </div>
  );
}

export default App;
