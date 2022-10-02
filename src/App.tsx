import React, {useState, useEffect} from 'react';
import './App.css';
import ItemInterface from './Store/Type/ItemInterface';
import {Paper, List, Container, AppBar, Toolbar, Grid, Typography, Button} from "@mui/material"
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';
import { call, signout } from './service/ApiService';
import NavigationBar from './component/NavigationBar';

function App() {
  
  const [items, setItems] = useState<ItemInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo/retrieve", "POST", null)
    .then((response : any) => {
      setItems(response.data)
      setLoading(false); 
    });
  }, []);

  const addItem = (item : ItemInterface) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  }

  const deleteItem = (item : ItemInterface) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  }

  const editItem = (item : ItemInterface) =>{
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
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

  let todoListPage = (
    <div>
      <NavigationBar/>
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">{todoItems}</div>  
      </Container>
    </div>
  )

  let loadingPage = (
    <h1> 로딩중 ... </h1>
  )

  let content = loadingPage;

  if(!loading) {
    content = todoListPage;
  }
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
