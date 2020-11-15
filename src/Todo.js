import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import './Todo.css';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    
                    </Avatar>
                </ListItemAvatar>

                <ListItemText primary={props.text} secondary="Deadline ⏰" />

            </ListItem>


        </List>
    )
}

export default Todo

//React functional component w/ an export. 
//This is the todo/text component
//props passes anything to the component, in this case it will just be the title of the text. 