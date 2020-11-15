import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //On load, listen to firebase DB and load new todos as they get created/deleted

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo)) //snapshot map bubbles up as an arry, allowing 
    }) 
  }, [])

  /*Fires on load ONLY (when database changes) 
  Snapshot takes a "picture" on database change*/


  const addTodo = (event) => {
    //onClick
    event.preventDefault(); //Stops refresh to prevent short term memory allocation loss

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input]);
    setInput('');
  } 

  return (
    <div className="App">

      <h1>Welcome to the <i>DO</i> list.</h1>
      
      <form>
        <FormControl>
          <InputLabel>✔️ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button onClick={addTodo} disabled={!input} variant="contained" color="primary">
          Add Todo
        </Button> 
      </form> 

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
