import React, {useState} from "react";
import ItemInterface from "../Store/Type/ItemInterface"
import {ListItem, Checkbox, ListItemText, InputBase, ListItemSecondaryAction, IconButton } from "@mui/material"
import { DeleteOutline } from "@mui/icons-material";
const Todo = (props: { item : ItemInterface, key : string, editItem : any, deleteItem : any }) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const turnOffReadOnly = () => { 
        setReadOnly(false);
    }

    const turnOnReadOnly = (e: { key: string; }) => { 
        if(e.key === "Enter"){
            setReadOnly(true);
            editItem(item);
        }
    }

    const editEventHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({...item, title : e.target.value});
    }

    const checkboxEventHandler = (e : React.ChangeEvent<HTMLInputElement>) =>{
        item.done = e.target.checked;
        editItem(item);
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked", readOnly : readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHander}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutline/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;