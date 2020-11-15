import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';



function App() {
  const [todos, setTodos] = useState(['Let cat in!', 'Take out the garbage on Sunday!']);
  const count = 0;
  const [input, setInput] = useState('');
  console.log('Input field:', input);

  const addTodo = (event) => {
    //onClick
    event.preventDefault(); //Stops refresh to prevent short term memory allocation loss
    console.log('Button Clicked');
    setTodos([...todos, input]);
    setInput(['']);
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
