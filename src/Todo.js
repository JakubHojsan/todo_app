import React, { useState } from 'react';
import { Modal, Button, Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { SettingsInputComponent, SettingsPowerRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
    }));

    function Todo(props) {
        const classes = useStyles();
        const [open, setOpen] = useState(false);
        const [input, setInput] = useState();

        const handleOpen = () => {
            setOpen(true);
        };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <>

        <Modal open={open} onClose={e => setOpen(false)} >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={e => updateTodo()}>Update Todo</Button>
            </div>
        </Modal>

        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    
                    </Avatar>
                </ListItemAvatar>

                <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" /> 
                {/* todo object and todo message */}

            </ListItem>

            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>

        </List>
        </>
    )
}

export default Todo

//React functional component w/ an export. 
//This is the todo/text component
//props passes anything to the component, in this case it will just be the title of the text. 